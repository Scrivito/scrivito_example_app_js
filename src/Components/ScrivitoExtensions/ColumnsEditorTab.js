import * as React from "react";
import * as Scrivito from "scrivito";
import Draggable from "react-draggable";
import { flatten, isEqual, last, take, takeRight, times } from "lodash-es";
import ColumnWidget from "../../Widgets/ColumnWidget/ColumnWidgetClass";

class ColumnsEditorTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalContents: props.widget
        .get("columns")
        .map(column => column.get("content")),
      currentGrid: gridOfWidget(props.widget),
    };

    this.adjustGrid = this.adjustGrid.bind(this);
  }

  render() {
    return (
      <div className="scrivito_detail_content">
        <Alignment widget={this.props.widget} />
        <div className="scrivito_detail_label">
          <span>Layout (desktop)</span>
        </div>
        <div className="item_content">
          <div className="gle-preview-list">
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="1 column"
                grid={[12]}
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="2 columns"
                grid={[6, 6]}
              />
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="2 columns"
                grid={[3, 9]}
              />
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="2 columns"
                grid={[9, 3]}
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="3 columns"
                grid={[4, 4, 4]}
              />
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="3 columns"
                grid={[2, 8, 2]}
              />
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="3 columns"
                grid={[2, 5, 5]}
              />
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="3 columns"
                grid={[5, 5, 2]}
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="4 columns"
                grid={[3, 3, 3, 3]}
              />
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="4 columns"
                grid={[2, 4, 4, 2]}
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="5 columns"
                grid={[2, 2, 2, 2, 4]}
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid={this.state.currentGrid}
                adjustGrid={this.adjustGrid}
                title="6 columns"
                grid={[2, 2, 2, 2, 2, 2]}
              />
            </div>
          </div>
          <GridLayoutEditor
            currentGrid={this.state.currentGrid}
            adjustGrid={this.adjustGrid}
          />
        </div>
      </div>
    );
  }

  adjustGrid(newGrid) {
    if (isEqual(this.state.currentGrid, newGrid)) {
      return;
    }

    const containerWidget = this.props.widget;

    adjustNumberOfColumns(containerWidget, newGrid.length);
    distributeContents(
      containerWidget.get("columns"),
      this.state.originalContents
    );
    adjustColSize(containerWidget.get("columns"), newGrid);

    this.setState({ currentGrid: gridOfWidget(containerWidget) });
  }
}

Scrivito.registerComponent("ColumnsEditorTab", ColumnsEditorTab);

const PresetGrid = Scrivito.connect(
  ({ currentGrid, adjustGrid, title, grid }) => {
    const classNames = ["gle-preview"];
    if (isEqual(currentGrid, grid)) {
      classNames.push("active");
    }

    return (
      <div
        className={classNames.join(" ")}
        title={title}
        onClick={() => adjustGrid(grid)}
      >
        {grid.map((colSize, index) => (
          <div className={`grid-col-${colSize}`} key={index} />
        ))}
      </div>
    );
  }
);

const Alignment = Scrivito.connect(({ widget }) => {
  const startAlignmentClasses = ["gle-preview"];
  const centerAlignmentClasses = ["gle-preview"];
  const endAlignmentClasses = ["gle-preview"];
  const stretchAlignmentClasses = ["gle-preview"];

  switch (widget.get("alignment")) {
    case "start":
      startAlignmentClasses.push("active");
      break;
    case "center":
      centerAlignmentClasses.push("active");
      break;
    case "end":
      endAlignmentClasses.push("active");
      break;
    case "stretch":
      stretchAlignmentClasses.push("active");
      break;
    default:
      startAlignmentClasses.push("active");
      break;
  }

  return (
    <React.Fragment>
      <div className="scrivito_detail_label">
        <span>Alignment</span>
      </div>
      <div className="item_content">
        <div className="gle-preview-list">
          <div className="gle-preview-group">
            <div
              className={startAlignmentClasses.join(" ")}
              title="Content top aligned"
              onClick={() => widget.update({ alignment: "start" })}
            >
              <div className="grid-col-12">
                <span className="alignment" />
              </div>
            </div>

            <div
              className={centerAlignmentClasses.join(" ")}
              title="Content center aligned"
              onClick={() => widget.update({ alignment: "center" })}
            >
              <div className="grid-col-12">
                <span className="alignment center" />
              </div>
            </div>

            <div
              className={endAlignmentClasses.join(" ")}
              title="Content bottom aligned"
              onClick={() => widget.update({ alignment: "end" })}
            >
              <div className="grid-col-12">
                <span className="alignment bottom" />
              </div>
            </div>

            <div
              className={stretchAlignmentClasses.join(" ")}
              title="Content stretch (full height) aligned"
              onClick={() => widget.update({ alignment: "stretch" })}
            >
              <div className="grid-col-12">
                <span className="alignment fullHeight" />
              </div>
            </div>
          </div>
        </div>
        <AlignmentDescription alignment={widget.get("alignment")} />
      </div>
    </React.Fragment>
  );
});

class GridLayoutEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      draggableGrid: 0,
    };

    this.gridRulerRef = React.createRef();

    this.adjustNumberOfColumns = this.adjustNumberOfColumns.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    const draggableGrid =
      this.gridRulerRef.current.firstChild.getBoundingClientRect().width + 10;

    if (this.state.draggableGrid !== draggableGrid) {
      this.setState({
        draggableGrid,
      });
    }
  }

  onDragStop({ colIndex, deltaColSize }) {
    if (deltaColSize === 0) {
      return;
    }

    const newGrid = [...this.props.currentGrid];
    newGrid[colIndex] += deltaColSize;
    newGrid[colIndex + 1] -= deltaColSize;

    this.props.adjustGrid(newGrid);
  }

  adjustNumberOfColumns(wantedCols) {
    if (wantedCols > 6 || wantedCols < 1) {
      return;
    }

    if (wantedCols === 5) {
      return this.props.adjustGrid([2, 2, 2, 2, 4]);
    }

    const newColSize = 12 / wantedCols;
    return this.props.adjustGrid(times(wantedCols).map(() => newColSize));
  }

  render() {
    const gridColumns = this.props.currentGrid.map((colSize, colIndex) => {
      const innerContent = [
        <div key="grid-label" className="grid-label">
          {colSize}
        </div>,
      ];

      const nextColSize = this.props.currentGrid[colIndex + 1];
      if (nextColSize) {
        const leftBound = -(colSize - 1);
        const rightBound = nextColSize - 1;

        innerContent.unshift(
          <Draggable
            key="grid-handle"
            bounds={{
              left: this.state.draggableGrid * leftBound,
              right: this.state.draggableGrid * rightBound,
            }}
            axis="x"
            grid={[this.state.draggableGrid, 0]}
            position={{ x: 0, y: 0 }}
            onStop={(_e, { x }) =>
              this.onDragStop({
                colIndex,
                deltaColSize: Math.round(x / this.state.draggableGrid),
              })
            }
          >
            <div className="grid-handle" />
          </Draggable>
        );
      } else if (colIndex < 5) {
        innerContent.unshift(
          <div
            key="grid-handle-plus"
            className="grid-handle grid-handle-plus"
            title="add a column"
            onClick={() =>
              this.adjustNumberOfColumns(this.props.currentGrid.length + 1)
            }
          />
        );
      }

      if (this.props.currentGrid.length > 1) {
        innerContent.push(
          <div
            key="grid-del"
            className="grid-del"
            title="delete column"
            onClick={() =>
              this.adjustNumberOfColumns(this.props.currentGrid.length - 1)
            }
          />
        );
      }

      return (
        <div
          key={`grid-col-${colIndex}`}
          className={`grid-col-${colSize} noselect`}
        >
          {innerContent}
        </div>
      );
    });

    return (
      <div className="gle">
        <div className="grid-ruler" ref={this.gridRulerRef}>
          {times(12).map(index => (
            <div key={index} className="grid-col" />
          ))}
        </div>
        <div className="grid-columns">{gridColumns}</div>
      </div>
    );
  }
}

function gridOfWidget(containerWidget) {
  return containerWidget.get("columns").map(column => column.get("colSize"));
}

function adjustNumberOfColumns(containerWidget, desiredLength) {
  const columns = containerWidget.get("columns");
  if (columns.length === desiredLength) {
    return;
  }

  const newColumns = times(desiredLength).map(index => {
    return columns[index] || new ColumnWidget({});
  });

  // store results, to receive IDs for new ColumnWidgets
  containerWidget.update({ columns: newColumns });
}

function distributeContents(columns, originalContents) {
  const splitIndexAt = columns.length - 1;

  // copy first n -1 elements
  take(originalContents, splitIndexAt).forEach((originalContent, index) => {
    columns[index].update({ content: originalContent });
  });

  // merge last columns into one
  const colsToMerge = takeRight(
    originalContents,
    originalContents.length - splitIndexAt
  );
  last(columns).update({ content: flatten(colsToMerge) });
}

function adjustColSize(columns, newGrid) {
  newGrid.forEach((colSize, index) => {
    columns[index].update({ colSize });
  });
}

function AlignmentDescription({ alignment }) {
  if (alignment !== "stretch") {
    return null;
  }

  return (
    <div className="scrivito_notice_body">
      Stretch (full height) only works with one box widget inside a column.
    </div>
  );
}
