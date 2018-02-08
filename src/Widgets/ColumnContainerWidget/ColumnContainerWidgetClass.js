import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const ColumnContainerWidget = Scrivito.provideWidgetClass('ColumnContainerWidget', {
  attributes: {
    columns: ['widgetlist', { only: 'ColumnWidget' }],
    verticallyAligned: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('ColumnContainerWidget', [
  { attribute: 'columns', type: 'widgetlist' },
]);

export default ColumnContainerWidget;
