import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";

Scrivito.provideComponent("StudentWidget", ({ widget }) => {
    const classNames = [];
    if (widget.get("alignment")) {
        classNames.push(`text-${widget.get("alignment")}`);
    }

  return (
    <div style={{color:"black"}}>
    <dl>
        <dt>Stadt</dt>
        <dd>
            <Scrivito.ContentTag
            tag="div"
            className={"text-center"}
            content={widget}
            attribute="city"
            />
        </dd>
        <dt>Name</dt>
        <dd><Scrivito.ContentTag
            tag="div"
            className={"text-center"}
            content={widget}
            attribute="name"
            />
        </dd>
        <dt>Geburtstag</dt>
        <dd><Scrivito.ContentTag
            tag="div"
            className={"text-center"}
            content={widget}
            attribute="birthday"
            >
            {formatDate(widget.get("birthday"), "mm/dd")}
            </Scrivito.ContentTag>
        </dd>
        <dt>Höhe</dt>
        <dd><Scrivito.ContentTag
            tag="div"
            className={"text-center"}
            content={widget}
            attribute="height"
            />
        </dd>
        <dt>Foto</dt>
        <dd>
        <Scrivito.ImageTag
        content={widget.get("image")}
        className="img-responsive"
        />
        </dd>
    </dl>
    </div>
  );
});
