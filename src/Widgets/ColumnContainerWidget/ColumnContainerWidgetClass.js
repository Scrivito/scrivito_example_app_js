import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const ColumnContainerWidget = Scrivito.provideWidgetClass('ColumnContainerWidget', {
  attributes: {
    columns: ['widgetlist', { only: 'ColumnWidget' }],
    alignmentSize: ['enum', { values: ['align-items-start', 'align-items-center', 'align-items-end', 'align-items-stretch'] }],
  },
});

registerTextExtract('ColumnContainerWidget', [
  { attribute: 'columns', type: 'widgetlist' },
]);

export default ColumnContainerWidget;
