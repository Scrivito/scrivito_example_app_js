import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

function AuthorImage({ image }) {
  if (!image) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Click here to select an author image.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <Scrivito.BackgroundImageTag
      className="img-circle"
      style={
        {
          background: { image },

          // relative square in css - https://stackoverflow.com/a/23924580/881759
          width: '100%',
          paddingBottom: '100%',
        }
      }
    />
  );
}

export default Scrivito.connect(AuthorImage);
