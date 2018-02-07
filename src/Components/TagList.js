import * as React from 'react';

function TagList({ showTags, tags, currentTag, setTag }) {
  if (!showTags) { return null; }

  const onClick = (e, tag) => {
    e.preventDefault();
    e.stopPropagation();
    setTag(tag);
  };

  return (
    <div className="negative-margin-top nav-centered select-icon">
      <ul className="nav nav-pills hidden-xs">
        <li role="presentation" className={ !currentTag ? 'active' : '' }>
          <a onClick={ e => onClick(e, '') } href='#'>All</a>
        </li>
        {
          tags.map(tag =>
            <li
              role="presentation"
              key={ tag }
              className={ currentTag === tag ? 'active' : '' }
            >
              <a onClick={ e => onClick(e, tag) } href='#'>{ tag }</a>
            </li>
          )
        }
      </ul>
      <select
        onChange={ e => setTag(e.target.value) }
        value={ currentTag }
        className="visible-xs"
      >
        <option value="">All</option>
        {
          tags.map(tag => <option key={ tag } value={ tag }>{ tag }</option>)
        }
      </select>
    </div>
  );
}

export default TagList;
