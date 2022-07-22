/**
 * A severity from Vale Server.
 */
type ValeSeverity = "suggestion" | "warning" | "error";

interface IEditorContext {
  Content: string;
  Offset: number;
}

/**
 * An Action From Vale.
 */
interface IValeActionJSON {
  readonly Name: string;
  readonly Params: [number,string];
}

/**
 * An Alert From Vale.
 */
interface IValeErrorJSON {
  readonly Action: IValeActionJSON;
  readonly Check: string;
  readonly Match: string;
  readonly Description: string;
  readonly Line: number;
  readonly Link: string;
  readonly Message: string;
  readonly Span: [number, number];
  readonly Severity: ValeSeverity;
}

// type Fixer
// const fixers: Map<string, string> = new Map([
//   ['name', 'Tom'],
//   ['country', 'Chile'],
// ]);

// var fixers = map[string]fixer{
// 	"suggest": suggest,
// 	"replace": replace,
// 	"remove":  remove,
// 	"convert": convert,
// 	"edit":    edit,
// }
