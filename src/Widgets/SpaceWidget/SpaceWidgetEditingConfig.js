import * as Scrivito from 'scrivito';
import spaceWidgetIcon from "../../assets/images/space_widget.svg";

Scrivito.provideEditingConfig('SpaceWidget', {
  title: 'SpaceWidget',
  thumbnail: spaceWidgetIcon,
  attributes: {
    size: {
      title: 'Choose size',
    },
    freeSize: {
      title: 'Enter custom height of widget in px or (r)em. ie: 10px, 2em',
    },
  },
  properties: ['size', 'freeSize'],
});
