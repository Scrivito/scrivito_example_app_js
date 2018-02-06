import * as Scrivito from 'scrivito';
import isEmpty from 'is-empty';
import isPlainObject from 'lodash/isPlainObject';
import dataFromEvent from './SchemaDotOrg/dataFromEvent';
import dataFromAddressWidget from './SchemaDotOrg/dataFromAddressWidget';

const SchemaDotOrg = Scrivito.connect(({ content }) => {
  const data = pruneEmptyValues(dataFromItem(content));

  return (
    <script type="application/ld+json">
      { JSON.stringify(data) }
    </script>
  );
});

function dataFromItem(item) {
  switch (item.objClass()) {
    case 'AddressWidget': return dataFromAddressWidget(item);
    case 'Event': return dataFromEvent(item);
  }

  throw `SchemaDotOrg for objClass ${item.objClass()} not supported!`;
}

function pruneEmptyValues(data) {
  let prunedData = mapValues(data, subData => {
    if (isPlainObject(subData)) {
      return pruneEmptyValues(subData);
    }
    return subData;
  });

  prunedData = pickBy(prunedData, v => !isEmpty(v));

  const keysWithoutAt = Object.keys(prunedData).filter(sd => !sd.startsWith('@'));
  if (keysWithoutAt.length) {
    return prunedData;
  }
  return {};
}

function arrayToObject(array) {
  return Object.assign(
    ...array.map(([key, value]) => ({ [key]: value }))
  );
}

function mapValues(data, fn) {
  return arrayToObject(
    Object.entries(data)
      .map(([key, value]) => [key, fn(value)])
  );
}

function pickBy(data, fn) {
  return arrayToObject(
    Object.entries(data).filter(([_key, value]) => fn(value))
  );
}

export default SchemaDotOrg;
