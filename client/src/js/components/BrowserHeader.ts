import React from 'react';



class BrowserHeader extends React.Component
{
    render() {
        return (
            <div>
                <div class="cloudinary-browser-header">
                {this.props.cloudName}
                </div>
            </div>
      );
  }
}

export default withInjector(MyGallery);
