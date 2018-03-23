/* global ss,fetch */
import Injector from 'lib/Injector';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setErrorMessage } from '../../../../../silverstripe/asset-admin/client/src/state/gallery/GalleryActions';

const SYNC_BUTTON_KEY = 'sync-with-cloudinary-button';

const getCloudinaryEnhancedGalleryToolbar = (GalleryToolbar) => {
    class CloudinaryEnhancedGalleryToolbar extends Component {
        constructor(props) {
            super(props);
            this.state = { updating: false };
        }

        handleSyncWithCloudinary() {
            const opts = { credentials: 'include' };
            fetch('/cloudinary-api/sync', opts).then(response => {
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

        renderButton() {
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
                key={SYNC_BUTTON_KEY}
                id={SYNC_BUTTON_KEY}
                className={classes.join(' ')}
                type="button"
                onClick={handleSyncWithCloudinary}
              >
                <span className="btn__text btn__title">
                  {message}
                </span>
              </button>
          );
        }

        render() {
            const props = this.props;
            props.children = props.children || [];
            props.children = props.children.filter(el => el.key !== SYNC_BUTTON_KEY);
            props.children.push(this.renderButton());
            return (
              <GalleryToolbar {...props} />
            );
        }
    }

    function mapStateToProps() {}

    function mapDispatchToProps(dispatch) {
        return {
            setError(msg) {
                dispatch(setErrorMessage(msg));
            },
        };
    }

    return compose(
        connect(mapStateToProps, mapDispatchToProps)
    )(CloudinaryEnhancedGalleryToolbar);
};

Injector.transform(
    'cloudinary-sync-button',
    (updater) => {
        updater.component('GalleryToolbar', getCloudinaryEnhancedGalleryToolbar);
    }
);
