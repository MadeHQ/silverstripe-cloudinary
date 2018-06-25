/* global ss */

import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setErrorMessage } from '../../../../../../silverstripe/asset-admin/client/src/state/gallery/GalleryActions';

export const CONSTANTS = { SYNC_BUTTON_KEY: 'sync-with-cloudinary-button' };

class CloudinarySync extends Component {
    constructor(props) {
        super(props);
        this.state = { updating: false };
        this.fetch = fetch;
    }

    handleSyncWithCloudinary() {
        const opts = { credentials: 'include' };
        this.fetch('/cloudinary-api/sync', opts).then(response => {
            if (response.status === 200) {
                response.json().then(this.handleSyncSuccess.bind(this));
            } else {
                response.json().then(this.handleSyncError.bind(this));
            }
        });
        delete this.state.updated;
        this.setState({
            updating: true
        });
    }
    handleSyncSuccess(data) {
        this.setState({
            updating: false,
            updated: data.result.count
        });

        this.props.refreshPage();
    }

    handleSyncError(data) {
        const { setError } = this.props;
        this.setState({
            updating: false
        });
        setError(ss.i18n._t(`Cloudinary.SYNC_WITH_CLOUDINARY_${data.error.toUpperCase()}`, data.description));
        setTimeout(() => {
            setError(null);
        }, 3000);
    }

    render() {
        const classes = ['btn', 'btn-secondary', 'font-icon-sync', 'btn--icon-xl'];
        if (this.state.updating) {
            classes.push('updating');
        }

        let message = ss.i18n._t('Cloudinary.SYNC_WITH_CLOUDINARY', 'Sync with Cloudinary');
        if (this.state.updating) {
            message = ss.i18n._t('Cloudinary.UPDATING_FROM_CLOUDINARY', 'Updating from Cloudinary');
        } else if (this.state.updated !== undefined) {
            message = ss.i18n.sprintf(ss.i18n._t('Cloudinary.UPDATED_FROM_CLOUDINARY', '%s Synced from Cloudinary'), this.state.updated);
        }

        const handleSyncWithCloudinary = () => {
            this.handleSyncWithCloudinary();
        };

        return (
          <button
            id={CONSTANTS.SYNC_BUTTON_KEY}
            className={classes.join(' ')}
            type="button"
            onClick={handleSyncWithCloudinary}
            title={message}
          >
            <span className="btn__text btn__title">
              {message}
            </span>
          </button>
      );
    }
}


function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        setError(msg) {
            dispatch(setErrorMessage(msg));
        },
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CloudinarySync);
