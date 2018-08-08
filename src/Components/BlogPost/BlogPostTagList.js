import * as React from "react";
import * as Scrivito from "scrivito";
import navigateToBlogWithTag from "../../utils/navigateToBlogWithTag";

function BlogPostTagList({ tags }) {
  return (
    <section>
      <div className="container">
        <div className="nav-centered">
          <ul className="nav nav-pills">
            {tags.map(tag => (
              <li key={tag}>
                <a
                  className="margin-right"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigateToBlogWithTag(tag);
                  }}
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Scrivito.connect(BlogPostTagList);
