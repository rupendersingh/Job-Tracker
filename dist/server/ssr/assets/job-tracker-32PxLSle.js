import { n as require_jsx_runtime, o as require_react, s as __toESM, t as require_react_dom } from "../index.js";
//#region app/constants.ts
var import_react = /* @__PURE__ */ __toESM(require_react());
var SIDEBAR_COLLAPSED_KEY = "job-tracker-sidebar-collapsed";
var COLUMNS = [
	{
		id: "wishlist",
		title: "Wishlist",
		hint: "Saved, not applied",
		accent: "border-l-zinc-400",
		header: "text-zinc-700 dark:text-zinc-200",
		badge: "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100",
		bar: "bg-zinc-400",
		well: "bg-zinc-100/80 dark:bg-zinc-900/40",
		wellOver: "bg-zinc-200/90 ring-2 ring-zinc-400/50 dark:bg-zinc-800/70",
		dot: "bg-zinc-400"
	},
	{
		id: "applied",
		title: "Applied",
		hint: "Application submitted",
		accent: "border-l-sky-500",
		header: "text-sky-800 dark:text-sky-200",
		badge: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
		bar: "bg-sky-500",
		well: "bg-sky-50/70 dark:bg-sky-950/20",
		wellOver: "bg-sky-100 ring-2 ring-sky-400/60 dark:bg-sky-950/40",
		dot: "bg-sky-500"
	},
	{
		id: "follow-up",
		title: "Follow-up",
		hint: "Recruiter / referral ping",
		accent: "border-l-amber-500",
		header: "text-amber-800 dark:text-amber-200",
		badge: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
		bar: "bg-amber-500",
		well: "bg-amber-50/70 dark:bg-amber-950/20",
		wellOver: "bg-amber-100 ring-2 ring-amber-400/60 dark:bg-amber-950/40",
		dot: "bg-amber-500"
	},
	{
		id: "interview-r1",
		title: "Interview Round 1",
		hint: "First interview round",
		accent: "border-l-violet-500",
		header: "text-violet-800 dark:text-violet-200",
		badge: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200",
		bar: "bg-violet-500",
		well: "bg-violet-50/70 dark:bg-violet-950/20",
		wellOver: "bg-violet-100 ring-2 ring-violet-400/60 dark:bg-violet-950/40",
		dot: "bg-violet-500"
	},
	{
		id: "interview-r2",
		title: "Interview Round 2",
		hint: "Onsite / loop / next round",
		accent: "border-l-indigo-500",
		header: "text-indigo-800 dark:text-indigo-200",
		badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200",
		bar: "bg-indigo-500",
		well: "bg-indigo-50/70 dark:bg-indigo-950/20",
		wellOver: "bg-indigo-100 ring-2 ring-indigo-400/60 dark:bg-indigo-950/40",
		dot: "bg-indigo-500"
	},
	{
		id: "offer",
		title: "Offer",
		hint: "Offer received",
		accent: "border-l-emerald-500",
		header: "text-emerald-800 dark:text-emerald-200",
		badge: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
		bar: "bg-emerald-500",
		well: "bg-emerald-50/70 dark:bg-emerald-950/20",
		wellOver: "bg-emerald-100 ring-2 ring-emerald-400/60 dark:bg-emerald-950/40",
		dot: "bg-emerald-500"
	},
	{
		id: "rejected",
		title: "Rejected",
		hint: "Closed out",
		accent: "border-l-rose-500",
		header: "text-rose-800 dark:text-rose-200",
		badge: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200",
		bar: "bg-rose-500",
		well: "bg-rose-50/70 dark:bg-rose-950/20",
		wellOver: "bg-rose-100 ring-2 ring-rose-400/60 dark:bg-rose-950/40",
		dot: "bg-rose-500"
	}
];
var STATUS_IDS = COLUMNS.map((c) => c.id);
var INTERVIEW_STATUSES = ["interview-r1", "interview-r2"];
var POST_WISHLIST = STATUS_IDS.filter((id) => id !== "wishlist");
var AVATAR_TONES = [
	"bg-teal-600",
	"bg-sky-600",
	"bg-violet-600",
	"bg-amber-600",
	"bg-rose-600",
	"bg-indigo-600",
	"bg-emerald-600",
	"bg-orange-600",
	"bg-cyan-700",
	"bg-fuchsia-600"
];
var SEED_SKILLS = [
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Python",
	"Java",
	"Go",
	"SQL",
	"PostgreSQL",
	"MongoDB",
	"AWS",
	"Docker",
	"Kubernetes",
	"System Design",
	"REST APIs",
	"GraphQL",
	"Tailwind CSS",
	"Git",
	"CI/CD",
	"Machine Learning",
	"Data Structures",
	"Linux",
	"Redis",
	"Kafka"
];
var emptyJob = () => ({
	company: "",
	role: "",
	linkedinUrl: "",
	resume: "",
	dateApplied: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
	salaryRange: "",
	notes: "",
	description: "",
	skills: [],
	status: "wishlist"
});
//#endregion
//#region node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function isWindow(element) {
	const elementString = Object.prototype.toString.call(element);
	return elementString === "[object Window]" || elementString === "[object global]";
}
function isNode(node) {
	return "nodeType" in node;
}
function getWindow(target) {
	var _target$ownerDocument, _target$ownerDocument2;
	if (!target) return window;
	if (isWindow(target)) return target;
	if (!isNode(target)) return window;
	return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
	const { Document } = getWindow(node);
	return node instanceof Document;
}
function isHTMLElement(node) {
	if (isWindow(node)) return false;
	return node instanceof getWindow(node).HTMLElement;
}
function isSVGElement(node) {
	return node instanceof getWindow(node).SVGElement;
}
function getOwnerDocument(target) {
	if (!target) return document;
	if (isWindow(target)) return target.document;
	if (!isNode(target)) return document;
	if (isDocument(target)) return target;
	if (isHTMLElement(target) || isSVGElement(target)) return target.ownerDocument;
	return document;
}
/**
* A hook that resolves to useEffect on the server and useLayoutEffect on the client
* @param callback {function} Callback function that is invoked when the dependencies of the hook change
*/
var useIsomorphicLayoutEffect = canUseDOM ? import_react.useLayoutEffect : import_react.useEffect;
function useEvent(handler) {
	const handlerRef = (0, import_react.useRef)(handler);
	useIsomorphicLayoutEffect(() => {
		handlerRef.current = handler;
	});
	return (0, import_react.useCallback)(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return handlerRef.current == null ? void 0 : handlerRef.current(...args);
	}, []);
}
function useInterval() {
	const intervalRef = (0, import_react.useRef)(null);
	return [(0, import_react.useCallback)((listener, duration) => {
		intervalRef.current = setInterval(listener, duration);
	}, []), (0, import_react.useCallback)(() => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, [])];
}
function useLatestValue(value, dependencies) {
	if (dependencies === void 0) dependencies = [value];
	const valueRef = (0, import_react.useRef)(value);
	useIsomorphicLayoutEffect(() => {
		if (valueRef.current !== value) valueRef.current = value;
	}, dependencies);
	return valueRef;
}
function useLazyMemo(callback, dependencies) {
	const valueRef = (0, import_react.useRef)();
	return (0, import_react.useMemo)(() => {
		const newValue = callback(valueRef.current);
		valueRef.current = newValue;
		return newValue;
	}, [...dependencies]);
}
function useNodeRef(onChange) {
	const onChangeHandler = useEvent(onChange);
	const node = (0, import_react.useRef)(null);
	return [node, (0, import_react.useCallback)((element) => {
		if (element !== node.current) onChangeHandler?.(element, node.current);
		node.current = element;
	}, [])];
}
function usePrevious(value) {
	const ref = (0, import_react.useRef)();
	(0, import_react.useEffect)(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
var ids = {};
function useUniqueId(prefix, value) {
	return (0, import_react.useMemo)(() => {
		if (value) return value;
		const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
		ids[prefix] = id;
		return prefix + "-" + id;
	}, [prefix, value]);
}
function createAdjustmentFn(modifier) {
	return function(object) {
		for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) adjustments[_key - 1] = arguments[_key];
		return adjustments.reduce((accumulator, adjustment) => {
			const entries = Object.entries(adjustment);
			for (const [key, valueAdjustment] of entries) {
				const value = accumulator[key];
				if (value != null) accumulator[key] = value + modifier * valueAdjustment;
			}
			return accumulator;
		}, { ...object });
	};
}
var add = /* @__PURE__ */ createAdjustmentFn(1);
var subtract = /* @__PURE__ */ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(event) {
	return "clientX" in event && "clientY" in event;
}
function isKeyboardEvent(event) {
	if (!event) return false;
	const { KeyboardEvent } = getWindow(event.target);
	return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
	if (!event) return false;
	const { TouchEvent } = getWindow(event.target);
	return TouchEvent && event instanceof TouchEvent;
}
/**
* Returns the normalized x and y coordinates for mouse and touch events.
*/
function getEventCoordinates(event) {
	if (isTouchEvent(event)) {
		if (event.touches && event.touches.length) {
			const { clientX: x, clientY: y } = event.touches[0];
			return {
				x,
				y
			};
		} else if (event.changedTouches && event.changedTouches.length) {
			const { clientX: x, clientY: y } = event.changedTouches[0];
			return {
				x,
				y
			};
		}
	}
	if (hasViewportRelativeCoordinates(event)) return {
		x: event.clientX,
		y: event.clientY
	};
	return null;
}
var CSS = /* @__PURE__ */ Object.freeze({
	Translate: { toString(transform) {
		if (!transform) return;
		const { x, y } = transform;
		return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
	} },
	Scale: { toString(transform) {
		if (!transform) return;
		const { scaleX, scaleY } = transform;
		return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
	} },
	Transform: { toString(transform) {
		if (!transform) return;
		return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(" ");
	} },
	Transition: { toString(_ref) {
		let { property, duration, easing } = _ref;
		return property + " " + duration + "ms " + easing;
	} }
});
var SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function findFirstFocusableNode(element) {
	if (element.matches(SELECTOR)) return element;
	return element.querySelector(SELECTOR);
}
//#endregion
//#region node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var hiddenStyles = { display: "none" };
function HiddenText(_ref) {
	let { id, value } = _ref;
	return import_react.createElement("div", {
		id,
		style: hiddenStyles
	}, value);
}
function LiveRegion(_ref) {
	let { id, announcement, ariaLiveType = "assertive" } = _ref;
	return import_react.createElement("div", {
		id,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: 1,
			height: 1,
			margin: -1,
			border: 0,
			padding: 0,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(100%)",
			whiteSpace: "nowrap"
		},
		role: "status",
		"aria-live": ariaLiveType,
		"aria-atomic": true
	}, announcement);
}
function useAnnouncement() {
	const [announcement, setAnnouncement] = (0, import_react.useState)("");
	return {
		announce: (0, import_react.useCallback)((value) => {
			if (value != null) setAnnouncement(value);
		}, []),
		announcement
	};
}
//#endregion
//#region node_modules/@dnd-kit/core/dist/core.esm.js
var DndMonitorContext = /* @__PURE__ */ (0, import_react.createContext)(null);
function useDndMonitor(listener) {
	const registerListener = (0, import_react.useContext)(DndMonitorContext);
	(0, import_react.useEffect)(() => {
		if (!registerListener) throw new Error("useDndMonitor must be used within a children of <DndContext>");
		return registerListener(listener);
	}, [listener, registerListener]);
}
function useDndMonitorProvider() {
	const [listeners] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const registerListener = (0, import_react.useCallback)((listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}, [listeners]);
	return [(0, import_react.useCallback)((_ref) => {
		let { type, event } = _ref;
		listeners.forEach((listener) => {
			var _listener$type;
			return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
		});
	}, [listeners]), registerListener];
}
var defaultScreenReaderInstructions = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " };
var defaultAnnouncements = {
	onDragStart(_ref) {
		let { active } = _ref;
		return "Picked up draggable item " + active.id + ".";
	},
	onDragOver(_ref2) {
		let { active, over } = _ref2;
		if (over) return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
		return "Draggable item " + active.id + " is no longer over a droppable area.";
	},
	onDragEnd(_ref3) {
		let { active, over } = _ref3;
		if (over) return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
		return "Draggable item " + active.id + " was dropped.";
	},
	onDragCancel(_ref4) {
		let { active } = _ref4;
		return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
	}
};
function Accessibility(_ref) {
	let { announcements = defaultAnnouncements, container, hiddenTextDescribedById, screenReaderInstructions = defaultScreenReaderInstructions } = _ref;
	const { announce, announcement } = useAnnouncement();
	const liveRegionId = useUniqueId("DndLiveRegion");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	useDndMonitor((0, import_react.useMemo)(() => ({
		onDragStart(_ref2) {
			let { active } = _ref2;
			announce(announcements.onDragStart({ active }));
		},
		onDragMove(_ref3) {
			let { active, over } = _ref3;
			if (announcements.onDragMove) announce(announcements.onDragMove({
				active,
				over
			}));
		},
		onDragOver(_ref4) {
			let { active, over } = _ref4;
			announce(announcements.onDragOver({
				active,
				over
			}));
		},
		onDragEnd(_ref5) {
			let { active, over } = _ref5;
			announce(announcements.onDragEnd({
				active,
				over
			}));
		},
		onDragCancel(_ref6) {
			let { active, over } = _ref6;
			announce(announcements.onDragCancel({
				active,
				over
			}));
		}
	}), [announce, announcements]));
	if (!mounted) return null;
	const markup = import_react.createElement(import_react.Fragment, null, import_react.createElement(HiddenText, {
		id: hiddenTextDescribedById,
		value: screenReaderInstructions.draggable
	}), import_react.createElement(LiveRegion, {
		id: liveRegionId,
		announcement
	}));
	return container ? (0, import_react_dom.createPortal)(markup, container) : markup;
}
var Action;
(function(Action) {
	Action["DragStart"] = "dragStart";
	Action["DragMove"] = "dragMove";
	Action["DragEnd"] = "dragEnd";
	Action["DragCancel"] = "dragCancel";
	Action["DragOver"] = "dragOver";
	Action["RegisterDroppable"] = "registerDroppable";
	Action["SetDroppableDisabled"] = "setDroppableDisabled";
	Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));
function noop() {}
function useSensor(sensor, options) {
	return (0, import_react.useMemo)(() => ({
		sensor,
		options: options != null ? options : {}
	}), [sensor, options]);
}
function useSensors() {
	for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) sensors[_key] = arguments[_key];
	return (0, import_react.useMemo)(() => [...sensors].filter((sensor) => sensor != null), [...sensors]);
}
var defaultCoordinates = /* @__PURE__ */ Object.freeze({
	x: 0,
	y: 0
});
/**
* Returns the distance between two points
*/
function distanceBetween(p1, p2) {
	return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function getRelativeTransformOrigin(event, rect) {
	const eventCoordinates = getEventCoordinates(event);
	if (!eventCoordinates) return "0 0";
	const transformOrigin = {
		x: (eventCoordinates.x - rect.left) / rect.width * 100,
		y: (eventCoordinates.y - rect.top) / rect.height * 100
	};
	return transformOrigin.x + "% " + transformOrigin.y + "%";
}
/**
* Sort collisions from smallest to greatest value
*/
function sortCollisionsAsc(_ref, _ref2) {
	let { data: { value: a } } = _ref;
	let { data: { value: b } } = _ref2;
	return a - b;
}
/**
* Sort collisions from greatest to smallest value
*/
function sortCollisionsDesc(_ref3, _ref4) {
	let { data: { value: a } } = _ref3;
	let { data: { value: b } } = _ref4;
	return b - a;
}
/**
* Returns the coordinates of the corners of a given rectangle:
* [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
*/
function cornersOfRectangle(_ref5) {
	let { left, top, height, width } = _ref5;
	return [
		{
			x: left,
			y: top
		},
		{
			x: left + width,
			y: top
		},
		{
			x: left,
			y: top + height
		},
		{
			x: left + width,
			y: top + height
		}
	];
}
function getFirstCollision(collisions, property) {
	if (!collisions || collisions.length === 0) return null;
	const [firstCollision] = collisions;
	return property ? firstCollision[property] : firstCollision;
}
/**
* Returns the closest rectangles from an array of rectangles to the corners of
* another rectangle.
*/
var closestCorners = (_ref) => {
	let { collisionRect, droppableRects, droppableContainers } = _ref;
	const corners = cornersOfRectangle(collisionRect);
	const collisions = [];
	for (const droppableContainer of droppableContainers) {
		const { id } = droppableContainer;
		const rect = droppableRects.get(id);
		if (rect) {
			const rectCorners = cornersOfRectangle(rect);
			const distances = corners.reduce((accumulator, corner, index) => {
				return accumulator + distanceBetween(rectCorners[index], corner);
			}, 0);
			const effectiveDistance = Number((distances / 4).toFixed(4));
			collisions.push({
				id,
				data: {
					droppableContainer,
					value: effectiveDistance
				}
			});
		}
	}
	return collisions.sort(sortCollisionsAsc);
};
/**
* Returns the intersecting rectangle area between two rectangles
*/
function getIntersectionRatio(entry, target) {
	const top = Math.max(target.top, entry.top);
	const left = Math.max(target.left, entry.left);
	const right = Math.min(target.left + target.width, entry.left + entry.width);
	const bottom = Math.min(target.top + target.height, entry.top + entry.height);
	const width = right - left;
	const height = bottom - top;
	if (left < right && top < bottom) {
		const targetArea = target.width * target.height;
		const entryArea = entry.width * entry.height;
		const intersectionArea = width * height;
		const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
		return Number(intersectionRatio.toFixed(4));
	}
	return 0;
}
/**
* Returns the rectangles that has the greatest intersection area with a given
* rectangle in an array of rectangles.
*/
var rectIntersection = (_ref) => {
	let { collisionRect, droppableRects, droppableContainers } = _ref;
	const collisions = [];
	for (const droppableContainer of droppableContainers) {
		const { id } = droppableContainer;
		const rect = droppableRects.get(id);
		if (rect) {
			const intersectionRatio = getIntersectionRatio(rect, collisionRect);
			if (intersectionRatio > 0) collisions.push({
				id,
				data: {
					droppableContainer,
					value: intersectionRatio
				}
			});
		}
	}
	return collisions.sort(sortCollisionsDesc);
};
function adjustScale(transform, rect1, rect2) {
	return {
		...transform,
		scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
		scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
	};
}
function getRectDelta(rect1, rect2) {
	return rect1 && rect2 ? {
		x: rect1.left - rect2.left,
		y: rect1.top - rect2.top
	} : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
	return function adjustClientRect(rect) {
		for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) adjustments[_key - 1] = arguments[_key];
		return adjustments.reduce((acc, adjustment) => ({
			...acc,
			top: acc.top + modifier * adjustment.y,
			bottom: acc.bottom + modifier * adjustment.y,
			left: acc.left + modifier * adjustment.x,
			right: acc.right + modifier * adjustment.x
		}), { ...rect });
	};
}
var getAdjustedRect = /* @__PURE__ */ createRectAdjustmentFn(1);
function parseTransform(transform) {
	if (transform.startsWith("matrix3d(")) {
		const transformArray = transform.slice(9, -1).split(/, /);
		return {
			x: +transformArray[12],
			y: +transformArray[13],
			scaleX: +transformArray[0],
			scaleY: +transformArray[5]
		};
	} else if (transform.startsWith("matrix(")) {
		const transformArray = transform.slice(7, -1).split(/, /);
		return {
			x: +transformArray[4],
			y: +transformArray[5],
			scaleX: +transformArray[0],
			scaleY: +transformArray[3]
		};
	}
	return null;
}
function inverseTransform(rect, transform, transformOrigin) {
	const parsedTransform = parseTransform(transform);
	if (!parsedTransform) return rect;
	const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
	const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
	const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
	const w = scaleX ? rect.width / scaleX : rect.width;
	const h = scaleY ? rect.height / scaleY : rect.height;
	return {
		width: w,
		height: h,
		top: y,
		right: x + w,
		bottom: y + h,
		left: x
	};
}
var defaultOptions = { ignoreTransform: false };
/**
* Returns the bounding client rect of an element relative to the viewport.
*/
function getClientRect(element, options) {
	if (options === void 0) options = defaultOptions;
	let rect = element.getBoundingClientRect();
	if (options.ignoreTransform) {
		const { transform, transformOrigin } = getWindow(element).getComputedStyle(element);
		if (transform) rect = inverseTransform(rect, transform, transformOrigin);
	}
	const { top, left, width, height, bottom, right } = rect;
	return {
		top,
		left,
		width,
		height,
		bottom,
		right
	};
}
/**
* Returns the bounding client rect of an element relative to the viewport.
*
* @remarks
* The ClientRect returned by this method does not take into account transforms
* applied to the element it measures.
*
*/
function getTransformAgnosticClientRect(element) {
	return getClientRect(element, { ignoreTransform: true });
}
function getWindowClientRect(element) {
	const width = element.innerWidth;
	const height = element.innerHeight;
	return {
		top: 0,
		left: 0,
		right: width,
		bottom: height,
		width,
		height
	};
}
function isFixed(node, computedStyle) {
	if (computedStyle === void 0) computedStyle = getWindow(node).getComputedStyle(node);
	return computedStyle.position === "fixed";
}
function isScrollable(element, computedStyle) {
	if (computedStyle === void 0) computedStyle = getWindow(element).getComputedStyle(element);
	const overflowRegex = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((property) => {
		const value = computedStyle[property];
		return typeof value === "string" ? overflowRegex.test(value) : false;
	});
}
function getScrollableAncestors(element, limit) {
	const scrollParents = [];
	function findScrollableAncestors(node) {
		if (limit != null && scrollParents.length >= limit) return scrollParents;
		if (!node) return scrollParents;
		if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
			scrollParents.push(node.scrollingElement);
			return scrollParents;
		}
		if (!isHTMLElement(node) || isSVGElement(node)) return scrollParents;
		if (scrollParents.includes(node)) return scrollParents;
		const computedStyle = getWindow(element).getComputedStyle(node);
		if (node !== element) {
			if (isScrollable(node, computedStyle)) scrollParents.push(node);
		}
		if (isFixed(node, computedStyle)) return scrollParents;
		return findScrollableAncestors(node.parentNode);
	}
	if (!element) return scrollParents;
	return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
	const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
	return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
	if (!canUseDOM || !element) return null;
	if (isWindow(element)) return element;
	if (!isNode(element)) return null;
	if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) return window;
	if (isHTMLElement(element)) return element;
	return null;
}
function getScrollXCoordinate(element) {
	if (isWindow(element)) return element.scrollX;
	return element.scrollLeft;
}
function getScrollYCoordinate(element) {
	if (isWindow(element)) return element.scrollY;
	return element.scrollTop;
}
function getScrollCoordinates(element) {
	return {
		x: getScrollXCoordinate(element),
		y: getScrollYCoordinate(element)
	};
}
var Direction;
(function(Direction) {
	Direction[Direction["Forward"] = 1] = "Forward";
	Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
function isDocumentScrollingElement(element) {
	if (!canUseDOM || !element) return false;
	return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
	const minScroll = {
		x: 0,
		y: 0
	};
	const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
		height: window.innerHeight,
		width: window.innerWidth
	} : {
		height: scrollingContainer.clientHeight,
		width: scrollingContainer.clientWidth
	};
	const maxScroll = {
		x: scrollingContainer.scrollWidth - dimensions.width,
		y: scrollingContainer.scrollHeight - dimensions.height
	};
	return {
		isTop: scrollingContainer.scrollTop <= minScroll.y,
		isLeft: scrollingContainer.scrollLeft <= minScroll.x,
		isBottom: scrollingContainer.scrollTop >= maxScroll.y,
		isRight: scrollingContainer.scrollLeft >= maxScroll.x,
		maxScroll,
		minScroll
	};
}
var defaultThreshold = {
	x: .2,
	y: .2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
	let { top, left, right, bottom } = _ref;
	if (acceleration === void 0) acceleration = 10;
	if (thresholdPercentage === void 0) thresholdPercentage = defaultThreshold;
	const { isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollContainer);
	const direction = {
		x: 0,
		y: 0
	};
	const speed = {
		x: 0,
		y: 0
	};
	const threshold = {
		height: scrollContainerRect.height * thresholdPercentage.y,
		width: scrollContainerRect.width * thresholdPercentage.x
	};
	if (!isTop && top <= scrollContainerRect.top + threshold.height) {
		direction.y = Direction.Backward;
		speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
	} else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
		direction.y = Direction.Forward;
		speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
	}
	if (!isRight && right >= scrollContainerRect.right - threshold.width) {
		direction.x = Direction.Forward;
		speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
	} else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
		direction.x = Direction.Backward;
		speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
	}
	return {
		direction,
		speed
	};
}
function getScrollElementRect(element) {
	if (element === document.scrollingElement) {
		const { innerWidth, innerHeight } = window;
		return {
			top: 0,
			left: 0,
			right: innerWidth,
			bottom: innerHeight,
			width: innerWidth,
			height: innerHeight
		};
	}
	const { top, left, right, bottom } = element.getBoundingClientRect();
	return {
		top,
		left,
		right,
		bottom,
		width: element.clientWidth,
		height: element.clientHeight
	};
}
function getScrollOffsets(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return add(acc, getScrollCoordinates(node));
	}, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return acc + getScrollXCoordinate(node);
	}, 0);
}
function getScrollYOffset(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return acc + getScrollYCoordinate(node);
	}, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
	if (measure === void 0) measure = getClientRect;
	if (!element) return;
	const { top, left, bottom, right } = measure(element);
	if (!getFirstScrollableAncestor(element)) return;
	if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) element.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var properties = [[
	"x",
	["left", "right"],
	getScrollXOffset
], [
	"y",
	["top", "bottom"],
	getScrollYOffset
]];
var Rect = class {
	constructor(rect, element) {
		this.rect = void 0;
		this.width = void 0;
		this.height = void 0;
		this.top = void 0;
		this.bottom = void 0;
		this.right = void 0;
		this.left = void 0;
		const scrollableAncestors = getScrollableAncestors(element);
		const scrollOffsets = getScrollOffsets(scrollableAncestors);
		this.rect = { ...rect };
		this.width = rect.width;
		this.height = rect.height;
		for (const [axis, keys, getScrollOffset] of properties) for (const key of keys) Object.defineProperty(this, key, {
			get: () => {
				const currentOffsets = getScrollOffset(scrollableAncestors);
				const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
				return this.rect[key] + scrollOffsetsDeltla;
			},
			enumerable: true
		});
		Object.defineProperty(this, "rect", { enumerable: false });
	}
};
var Listeners = class {
	constructor(target) {
		this.target = void 0;
		this.listeners = [];
		this.removeAll = () => {
			this.listeners.forEach((listener) => {
				var _this$target;
				return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
			});
		};
		this.target = target;
	}
	add(eventName, handler, options) {
		var _this$target2;
		(_this$target2 = this.target) == null || _this$target2.addEventListener(eventName, handler, options);
		this.listeners.push([
			eventName,
			handler,
			options
		]);
	}
};
function getEventListenerTarget(target) {
	const { EventTarget } = getWindow(target);
	return target instanceof EventTarget ? target : getOwnerDocument(target);
}
function hasExceededDistance(delta, measurement) {
	const dx = Math.abs(delta.x);
	const dy = Math.abs(delta.y);
	if (typeof measurement === "number") return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
	if ("x" in measurement && "y" in measurement) return dx > measurement.x && dy > measurement.y;
	if ("x" in measurement) return dx > measurement.x;
	if ("y" in measurement) return dy > measurement.y;
	return false;
}
var EventName;
(function(EventName) {
	EventName["Click"] = "click";
	EventName["DragStart"] = "dragstart";
	EventName["Keydown"] = "keydown";
	EventName["ContextMenu"] = "contextmenu";
	EventName["Resize"] = "resize";
	EventName["SelectionChange"] = "selectionchange";
	EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));
function preventDefault(event) {
	event.preventDefault();
}
function stopPropagation(event) {
	event.stopPropagation();
}
var KeyboardCode;
(function(KeyboardCode) {
	KeyboardCode["Space"] = "Space";
	KeyboardCode["Down"] = "ArrowDown";
	KeyboardCode["Right"] = "ArrowRight";
	KeyboardCode["Left"] = "ArrowLeft";
	KeyboardCode["Up"] = "ArrowUp";
	KeyboardCode["Esc"] = "Escape";
	KeyboardCode["Enter"] = "Enter";
	KeyboardCode["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));
var defaultKeyboardCodes = {
	start: [KeyboardCode.Space, KeyboardCode.Enter],
	cancel: [KeyboardCode.Esc],
	end: [
		KeyboardCode.Space,
		KeyboardCode.Enter,
		KeyboardCode.Tab
	]
};
var defaultKeyboardCoordinateGetter = (event, _ref) => {
	let { currentCoordinates } = _ref;
	switch (event.code) {
		case KeyboardCode.Right: return {
			...currentCoordinates,
			x: currentCoordinates.x + 25
		};
		case KeyboardCode.Left: return {
			...currentCoordinates,
			x: currentCoordinates.x - 25
		};
		case KeyboardCode.Down: return {
			...currentCoordinates,
			y: currentCoordinates.y + 25
		};
		case KeyboardCode.Up: return {
			...currentCoordinates,
			y: currentCoordinates.y - 25
		};
	}
};
var KeyboardSensor = class {
	constructor(props) {
		this.props = void 0;
		this.autoScrollEnabled = false;
		this.referenceCoordinates = void 0;
		this.listeners = void 0;
		this.windowListeners = void 0;
		this.props = props;
		const { event: { target } } = props;
		this.props = props;
		this.listeners = new Listeners(getOwnerDocument(target));
		this.windowListeners = new Listeners(getWindow(target));
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.attach();
	}
	attach() {
		this.handleStart();
		this.windowListeners.add(EventName.Resize, this.handleCancel);
		this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
		setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
	}
	handleStart() {
		const { activeNode, onStart } = this.props;
		const node = activeNode.node.current;
		if (node) scrollIntoViewIfNeeded(node);
		onStart(defaultCoordinates);
	}
	handleKeyDown(event) {
		if (isKeyboardEvent(event)) {
			const { active, context, options } = this.props;
			const { keyboardCodes = defaultKeyboardCodes, coordinateGetter = defaultKeyboardCoordinateGetter, scrollBehavior = "smooth" } = options;
			const { code } = event;
			if (keyboardCodes.end.includes(code)) {
				this.handleEnd(event);
				return;
			}
			if (keyboardCodes.cancel.includes(code)) {
				this.handleCancel(event);
				return;
			}
			const { collisionRect } = context.current;
			const currentCoordinates = collisionRect ? {
				x: collisionRect.left,
				y: collisionRect.top
			} : defaultCoordinates;
			if (!this.referenceCoordinates) this.referenceCoordinates = currentCoordinates;
			const newCoordinates = coordinateGetter(event, {
				active,
				context: context.current,
				currentCoordinates
			});
			if (newCoordinates) {
				const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
				const scrollDelta = {
					x: 0,
					y: 0
				};
				const { scrollableAncestors } = context.current;
				for (const scrollContainer of scrollableAncestors) {
					const direction = event.code;
					const { isTop, isRight, isLeft, isBottom, maxScroll, minScroll } = getScrollPosition(scrollContainer);
					const scrollElementRect = getScrollElementRect(scrollContainer);
					const clampedCoordinates = {
						x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
						y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
					};
					const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
					const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
					if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
						const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
						const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
						if (canScrollToNewCoordinates && !coordinatesDelta.y) {
							scrollContainer.scrollTo({
								left: newScrollCoordinates,
								behavior: scrollBehavior
							});
							return;
						}
						if (canScrollToNewCoordinates) scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
						else scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
						if (scrollDelta.x) scrollContainer.scrollBy({
							left: -scrollDelta.x,
							behavior: scrollBehavior
						});
						break;
					} else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
						const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
						const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
						if (canScrollToNewCoordinates && !coordinatesDelta.x) {
							scrollContainer.scrollTo({
								top: newScrollCoordinates,
								behavior: scrollBehavior
							});
							return;
						}
						if (canScrollToNewCoordinates) scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
						else scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
						if (scrollDelta.y) scrollContainer.scrollBy({
							top: -scrollDelta.y,
							behavior: scrollBehavior
						});
						break;
					}
				}
				this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
			}
		}
	}
	handleMove(event, coordinates) {
		const { onMove } = this.props;
		event.preventDefault();
		onMove(coordinates);
	}
	handleEnd(event) {
		const { onEnd } = this.props;
		event.preventDefault();
		this.detach();
		onEnd();
	}
	handleCancel(event) {
		const { onCancel } = this.props;
		event.preventDefault();
		this.detach();
		onCancel();
	}
	detach() {
		this.listeners.removeAll();
		this.windowListeners.removeAll();
	}
};
KeyboardSensor.activators = [{
	eventName: "onKeyDown",
	handler: (event, _ref, _ref2) => {
		let { keyboardCodes = defaultKeyboardCodes, onActivation } = _ref;
		let { active } = _ref2;
		const { code } = event.nativeEvent;
		if (keyboardCodes.start.includes(code)) {
			const activator = active.activatorNode.current;
			if (activator && event.target !== activator) return false;
			event.preventDefault();
			onActivation?.({ event: event.nativeEvent });
			return true;
		}
		return false;
	}
}];
function isDistanceConstraint(constraint) {
	return Boolean(constraint && "distance" in constraint);
}
function isDelayConstraint(constraint) {
	return Boolean(constraint && "delay" in constraint);
}
var AbstractPointerSensor = class {
	constructor(props, events, listenerTarget) {
		var _getEventCoordinates;
		if (listenerTarget === void 0) listenerTarget = getEventListenerTarget(props.event.target);
		this.props = void 0;
		this.events = void 0;
		this.autoScrollEnabled = true;
		this.document = void 0;
		this.activated = false;
		this.initialCoordinates = void 0;
		this.timeoutId = null;
		this.listeners = void 0;
		this.documentListeners = void 0;
		this.windowListeners = void 0;
		this.props = props;
		this.events = events;
		const { event } = props;
		const { target } = event;
		this.props = props;
		this.events = events;
		this.document = getOwnerDocument(target);
		this.documentListeners = new Listeners(this.document);
		this.listeners = new Listeners(listenerTarget);
		this.windowListeners = new Listeners(getWindow(target));
		this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
		this.handleStart = this.handleStart.bind(this);
		this.handleMove = this.handleMove.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleKeydown = this.handleKeydown.bind(this);
		this.removeTextSelection = this.removeTextSelection.bind(this);
		this.attach();
	}
	attach() {
		const { events, props: { options: { activationConstraint, bypassActivationConstraint } } } = this;
		this.listeners.add(events.move.name, this.handleMove, { passive: false });
		this.listeners.add(events.end.name, this.handleEnd);
		if (events.cancel) this.listeners.add(events.cancel.name, this.handleCancel);
		this.windowListeners.add(EventName.Resize, this.handleCancel);
		this.windowListeners.add(EventName.DragStart, preventDefault);
		this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
		this.windowListeners.add(EventName.ContextMenu, preventDefault);
		this.documentListeners.add(EventName.Keydown, this.handleKeydown);
		if (activationConstraint) {
			if (bypassActivationConstraint != null && bypassActivationConstraint({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (isDelayConstraint(activationConstraint)) {
				this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
				this.handlePending(activationConstraint);
				return;
			}
			if (isDistanceConstraint(activationConstraint)) {
				this.handlePending(activationConstraint);
				return;
			}
		}
		this.handleStart();
	}
	detach() {
		this.listeners.removeAll();
		this.windowListeners.removeAll();
		setTimeout(this.documentListeners.removeAll, 50);
		if (this.timeoutId !== null) {
			clearTimeout(this.timeoutId);
			this.timeoutId = null;
		}
	}
	handlePending(constraint, offset) {
		const { active, onPending } = this.props;
		onPending(active, constraint, this.initialCoordinates, offset);
	}
	handleStart() {
		const { initialCoordinates } = this;
		const { onStart } = this.props;
		if (initialCoordinates) {
			this.activated = true;
			this.documentListeners.add(EventName.Click, stopPropagation, { capture: true });
			this.removeTextSelection();
			this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
			onStart(initialCoordinates);
		}
	}
	handleMove(event) {
		var _getEventCoordinates2;
		const { activated, initialCoordinates, props } = this;
		const { onMove, options: { activationConstraint } } = props;
		if (!initialCoordinates) return;
		const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
		const delta = subtract(initialCoordinates, coordinates);
		if (!activated && activationConstraint) {
			if (isDistanceConstraint(activationConstraint)) {
				if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) return this.handleCancel();
				if (hasExceededDistance(delta, activationConstraint.distance)) return this.handleStart();
			}
			if (isDelayConstraint(activationConstraint)) {
				if (hasExceededDistance(delta, activationConstraint.tolerance)) return this.handleCancel();
			}
			this.handlePending(activationConstraint, delta);
			return;
		}
		if (event.cancelable) event.preventDefault();
		onMove(coordinates);
	}
	handleEnd() {
		const { onAbort, onEnd } = this.props;
		this.detach();
		if (!this.activated) onAbort(this.props.active);
		onEnd();
	}
	handleCancel() {
		const { onAbort, onCancel } = this.props;
		this.detach();
		if (!this.activated) onAbort(this.props.active);
		onCancel();
	}
	handleKeydown(event) {
		if (event.code === KeyboardCode.Esc) this.handleCancel();
	}
	removeTextSelection() {
		var _this$document$getSel;
		(_this$document$getSel = this.document.getSelection()) == null || _this$document$getSel.removeAllRanges();
	}
};
var events = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
};
var PointerSensor = class extends AbstractPointerSensor {
	constructor(props) {
		const { event } = props;
		const listenerTarget = getOwnerDocument(event.target);
		super(props, events, listenerTarget);
	}
};
PointerSensor.activators = [{
	eventName: "onPointerDown",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		if (!event.isPrimary || event.button !== 0) return false;
		onActivation?.({ event });
		return true;
	}
}];
var events$1 = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
};
var MouseButton;
(function(MouseButton) {
	MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
var MouseSensor = class extends AbstractPointerSensor {
	constructor(props) {
		super(props, events$1, getOwnerDocument(props.event.target));
	}
};
MouseSensor.activators = [{
	eventName: "onMouseDown",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		if (event.button === MouseButton.RightClick) return false;
		onActivation?.({ event });
		return true;
	}
}];
var events$2 = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
};
var TouchSensor = class extends AbstractPointerSensor {
	constructor(props) {
		super(props, events$2);
	}
	static setup() {
		window.addEventListener(events$2.move.name, noop, {
			capture: false,
			passive: false
		});
		return function teardown() {
			window.removeEventListener(events$2.move.name, noop);
		};
		function noop() {}
	}
};
TouchSensor.activators = [{
	eventName: "onTouchStart",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		const { touches } = event;
		if (touches.length > 1) return false;
		onActivation?.({ event });
		return true;
	}
}];
var AutoScrollActivator;
(function(AutoScrollActivator) {
	AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
	AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));
var TraversalOrder;
(function(TraversalOrder) {
	TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
	TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));
function useAutoScroller(_ref) {
	let { acceleration, activator = AutoScrollActivator.Pointer, canScroll, draggingRect, enabled, interval = 5, order = TraversalOrder.TreeOrder, pointerCoordinates, scrollableAncestors, scrollableAncestorRects, delta, threshold } = _ref;
	const scrollIntent = useScrollIntent({
		delta,
		disabled: !enabled
	});
	const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
	const scrollSpeed = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const scrollDirection = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const rect = (0, import_react.useMemo)(() => {
		switch (activator) {
			case AutoScrollActivator.Pointer: return pointerCoordinates ? {
				top: pointerCoordinates.y,
				bottom: pointerCoordinates.y,
				left: pointerCoordinates.x,
				right: pointerCoordinates.x
			} : null;
			case AutoScrollActivator.DraggableRect: return draggingRect;
		}
	}, [
		activator,
		draggingRect,
		pointerCoordinates
	]);
	const scrollContainerRef = (0, import_react.useRef)(null);
	const autoScroll = (0, import_react.useCallback)(() => {
		const scrollContainer = scrollContainerRef.current;
		if (!scrollContainer) return;
		const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
		const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
		scrollContainer.scrollBy(scrollLeft, scrollTop);
	}, []);
	const sortedScrollableAncestors = (0, import_react.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
	(0, import_react.useEffect)(() => {
		if (!enabled || !scrollableAncestors.length || !rect) {
			clearAutoScrollInterval();
			return;
		}
		for (const scrollContainer of sortedScrollableAncestors) {
			if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) continue;
			const scrollContainerRect = scrollableAncestorRects[scrollableAncestors.indexOf(scrollContainer)];
			if (!scrollContainerRect) continue;
			const { direction, speed } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
			for (const axis of ["x", "y"]) if (!scrollIntent[axis][direction[axis]]) {
				speed[axis] = 0;
				direction[axis] = 0;
			}
			if (speed.x > 0 || speed.y > 0) {
				clearAutoScrollInterval();
				scrollContainerRef.current = scrollContainer;
				setAutoScrollInterval(autoScroll, interval);
				scrollSpeed.current = speed;
				scrollDirection.current = direction;
				return;
			}
		}
		scrollSpeed.current = {
			x: 0,
			y: 0
		};
		scrollDirection.current = {
			x: 0,
			y: 0
		};
		clearAutoScrollInterval();
	}, [
		acceleration,
		autoScroll,
		canScroll,
		clearAutoScrollInterval,
		enabled,
		interval,
		JSON.stringify(rect),
		JSON.stringify(scrollIntent),
		setAutoScrollInterval,
		scrollableAncestors,
		sortedScrollableAncestors,
		scrollableAncestorRects,
		JSON.stringify(threshold)
	]);
}
var defaultScrollIntent = {
	x: {
		[Direction.Backward]: false,
		[Direction.Forward]: false
	},
	y: {
		[Direction.Backward]: false,
		[Direction.Forward]: false
	}
};
function useScrollIntent(_ref2) {
	let { delta, disabled } = _ref2;
	const previousDelta = usePrevious(delta);
	return useLazyMemo((previousIntent) => {
		if (disabled || !previousDelta || !previousIntent) return defaultScrollIntent;
		const direction = {
			x: Math.sign(delta.x - previousDelta.x),
			y: Math.sign(delta.y - previousDelta.y)
		};
		return {
			x: {
				[Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
				[Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
			},
			y: {
				[Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
				[Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
			}
		};
	}, [
		disabled,
		delta,
		previousDelta
	]);
}
function useCachedNode(draggableNodes, id) {
	const draggableNode = id != null ? draggableNodes.get(id) : void 0;
	const node = draggableNode ? draggableNode.node.current : null;
	return useLazyMemo((cachedNode) => {
		var _ref;
		if (id == null) return null;
		return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
	}, [node, id]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
	return (0, import_react.useMemo)(() => sensors.reduce((accumulator, sensor) => {
		const { sensor: Sensor } = sensor;
		const sensorActivators = Sensor.activators.map((activator) => ({
			eventName: activator.eventName,
			handler: getSyntheticHandler(activator.handler, sensor)
		}));
		return [...accumulator, ...sensorActivators];
	}, []), [sensors, getSyntheticHandler]);
}
var MeasuringStrategy;
(function(MeasuringStrategy) {
	MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
	MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
	MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));
var MeasuringFrequency;
(function(MeasuringFrequency) {
	MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));
var defaultValue = /* @__PURE__ */ new Map();
function useDroppableMeasuring(containers, _ref) {
	let { dragging, dependencies, config } = _ref;
	const [queue, setQueue] = (0, import_react.useState)(null);
	const { frequency, measure, strategy } = config;
	const containersRef = (0, import_react.useRef)(containers);
	const disabled = isDisabled();
	const disabledRef = useLatestValue(disabled);
	const measureDroppableContainers = (0, import_react.useCallback)(function(ids) {
		if (ids === void 0) ids = [];
		if (disabledRef.current) return;
		setQueue((value) => {
			if (value === null) return ids;
			return value.concat(ids.filter((id) => !value.includes(id)));
		});
	}, [disabledRef]);
	const timeoutId = (0, import_react.useRef)(null);
	const droppableRects = useLazyMemo((previousValue) => {
		if (disabled && !dragging) return defaultValue;
		if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
			const map = /* @__PURE__ */ new Map();
			for (let container of containers) {
				if (!container) continue;
				if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
					map.set(container.id, container.rect.current);
					continue;
				}
				const node = container.node.current;
				const rect = node ? new Rect(measure(node), node) : null;
				container.rect.current = rect;
				if (rect) map.set(container.id, rect);
			}
			return map;
		}
		return previousValue;
	}, [
		containers,
		queue,
		dragging,
		disabled,
		measure
	]);
	(0, import_react.useEffect)(() => {
		containersRef.current = containers;
	}, [containers]);
	(0, import_react.useEffect)(() => {
		if (disabled) return;
		measureDroppableContainers();
	}, [dragging, disabled]);
	(0, import_react.useEffect)(() => {
		if (queue && queue.length > 0) setQueue(null);
	}, [JSON.stringify(queue)]);
	(0, import_react.useEffect)(() => {
		if (disabled || typeof frequency !== "number" || timeoutId.current !== null) return;
		timeoutId.current = setTimeout(() => {
			measureDroppableContainers();
			timeoutId.current = null;
		}, frequency);
	}, [
		frequency,
		disabled,
		measureDroppableContainers,
		...dependencies
	]);
	return {
		droppableRects,
		measureDroppableContainers,
		measuringScheduled: queue != null
	};
	function isDisabled() {
		switch (strategy) {
			case MeasuringStrategy.Always: return false;
			case MeasuringStrategy.BeforeDragging: return dragging;
			default: return !dragging;
		}
	}
}
function useInitialValue(value, computeFn) {
	return useLazyMemo((previousValue) => {
		if (!value) return null;
		if (previousValue) return previousValue;
		return typeof computeFn === "function" ? computeFn(value) : value;
	}, [computeFn, value]);
}
function useInitialRect(node, measure) {
	return useInitialValue(node, measure);
}
/**
* Returns a new MutationObserver instance.
* If `MutationObserver` is undefined in the execution environment, returns `undefined`.
*/
function useMutationObserver(_ref) {
	let { callback, disabled } = _ref;
	const handleMutations = useEvent(callback);
	const mutationObserver = (0, import_react.useMemo)(() => {
		if (disabled || typeof window === "undefined" || typeof window.MutationObserver === "undefined") return;
		const { MutationObserver } = window;
		return new MutationObserver(handleMutations);
	}, [handleMutations, disabled]);
	(0, import_react.useEffect)(() => {
		return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
	}, [mutationObserver]);
	return mutationObserver;
}
/**
* Returns a new ResizeObserver instance bound to the `onResize` callback.
* If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
*/
function useResizeObserver(_ref) {
	let { callback, disabled } = _ref;
	const handleResize = useEvent(callback);
	const resizeObserver = (0, import_react.useMemo)(() => {
		if (disabled || typeof window === "undefined" || typeof window.ResizeObserver === "undefined") return;
		const { ResizeObserver } = window;
		return new ResizeObserver(handleResize);
	}, [disabled]);
	(0, import_react.useEffect)(() => {
		return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
	}, [resizeObserver]);
	return resizeObserver;
}
function defaultMeasure(element) {
	return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
	if (measure === void 0) measure = defaultMeasure;
	const [rect, setRect] = (0, import_react.useState)(null);
	function measureRect() {
		setRect((currentRect) => {
			if (!element) return null;
			if (element.isConnected === false) {
				var _ref;
				return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
			}
			const newRect = measure(element);
			if (JSON.stringify(currentRect) === JSON.stringify(newRect)) return currentRect;
			return newRect;
		});
	}
	const mutationObserver = useMutationObserver({ callback(records) {
		if (!element) return;
		for (const record of records) {
			const { type, target } = record;
			if (type === "childList" && target instanceof HTMLElement && target.contains(element)) {
				measureRect();
				break;
			}
		}
	} });
	const resizeObserver = useResizeObserver({ callback: measureRect });
	useIsomorphicLayoutEffect(() => {
		measureRect();
		if (element) {
			resizeObserver?.observe(element);
			mutationObserver?.observe(document.body, {
				childList: true,
				subtree: true
			});
		} else {
			resizeObserver?.disconnect();
			mutationObserver?.disconnect();
		}
	}, [element]);
	return rect;
}
function useRectDelta(rect) {
	return getRectDelta(rect, useInitialValue(rect));
}
var defaultValue$1 = [];
function useScrollableAncestors(node) {
	const previousNode = (0, import_react.useRef)(node);
	const ancestors = useLazyMemo((previousValue) => {
		if (!node) return defaultValue$1;
		if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) return previousValue;
		return getScrollableAncestors(node);
	}, [node]);
	(0, import_react.useEffect)(() => {
		previousNode.current = node;
	}, [node]);
	return ancestors;
}
function useScrollOffsets(elements) {
	const [scrollCoordinates, setScrollCoordinates] = (0, import_react.useState)(null);
	const prevElements = (0, import_react.useRef)(elements);
	const handleScroll = (0, import_react.useCallback)((event) => {
		const scrollingElement = getScrollableElement(event.target);
		if (!scrollingElement) return;
		setScrollCoordinates((scrollCoordinates) => {
			if (!scrollCoordinates) return null;
			scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
			return new Map(scrollCoordinates);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const previousElements = prevElements.current;
		if (elements !== previousElements) {
			cleanup(previousElements);
			const entries = elements.map((element) => {
				const scrollableElement = getScrollableElement(element);
				if (scrollableElement) {
					scrollableElement.addEventListener("scroll", handleScroll, { passive: true });
					return [scrollableElement, getScrollCoordinates(scrollableElement)];
				}
				return null;
			}).filter((entry) => entry != null);
			setScrollCoordinates(entries.length ? new Map(entries) : null);
			prevElements.current = elements;
		}
		return () => {
			cleanup(elements);
			cleanup(previousElements);
		};
		function cleanup(elements) {
			elements.forEach((element) => {
				getScrollableElement(element)?.removeEventListener("scroll", handleScroll);
			});
		}
	}, [handleScroll, elements]);
	return (0, import_react.useMemo)(() => {
		if (elements.length) return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
		return defaultCoordinates;
	}, [elements, scrollCoordinates]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
	if (dependencies === void 0) dependencies = [];
	const initialScrollOffsets = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		initialScrollOffsets.current = null;
	}, dependencies);
	(0, import_react.useEffect)(() => {
		const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
		if (hasScrollOffsets && !initialScrollOffsets.current) initialScrollOffsets.current = scrollOffsets;
		if (!hasScrollOffsets && initialScrollOffsets.current) initialScrollOffsets.current = null;
	}, [scrollOffsets]);
	return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
	(0, import_react.useEffect)(() => {
		if (!canUseDOM) return;
		const teardownFns = sensors.map((_ref) => {
			let { sensor } = _ref;
			return sensor.setup == null ? void 0 : sensor.setup();
		});
		return () => {
			for (const teardown of teardownFns) teardown?.();
		};
	}, sensors.map((_ref2) => {
		let { sensor } = _ref2;
		return sensor;
	}));
}
function useSyntheticListeners(listeners, id) {
	return (0, import_react.useMemo)(() => {
		return listeners.reduce((acc, _ref) => {
			let { eventName, handler } = _ref;
			acc[eventName] = (event) => {
				handler(event, id);
			};
			return acc;
		}, {});
	}, [listeners, id]);
}
function useWindowRect(element) {
	return (0, import_react.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}
var defaultValue$2 = [];
function useRects(elements, measure) {
	if (measure === void 0) measure = getClientRect;
	const [firstElement] = elements;
	const windowRect = useWindowRect(firstElement ? getWindow(firstElement) : null);
	const [rects, setRects] = (0, import_react.useState)(defaultValue$2);
	function measureRects() {
		setRects(() => {
			if (!elements.length) return defaultValue$2;
			return elements.map((element) => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
		});
	}
	const resizeObserver = useResizeObserver({ callback: measureRects });
	useIsomorphicLayoutEffect(() => {
		resizeObserver?.disconnect();
		measureRects();
		elements.forEach((element) => resizeObserver == null ? void 0 : resizeObserver.observe(element));
	}, [elements]);
	return rects;
}
function getMeasurableNode(node) {
	if (!node) return null;
	if (node.children.length > 1) return node;
	const firstChild = node.children[0];
	return isHTMLElement(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
	let { measure } = _ref;
	const [rect, setRect] = (0, import_react.useState)(null);
	const resizeObserver = useResizeObserver({ callback: (0, import_react.useCallback)((entries) => {
		for (const { target } of entries) if (isHTMLElement(target)) {
			setRect((rect) => {
				const newRect = measure(target);
				return rect ? {
					...rect,
					width: newRect.width,
					height: newRect.height
				} : newRect;
			});
			break;
		}
	}, [measure]) });
	const [nodeRef, setRef] = useNodeRef((0, import_react.useCallback)((element) => {
		const node = getMeasurableNode(element);
		resizeObserver?.disconnect();
		if (node) resizeObserver?.observe(node);
		setRect(node ? measure(node) : null);
	}, [measure, resizeObserver]));
	return (0, import_react.useMemo)(() => ({
		nodeRef,
		rect,
		setRef
	}), [
		rect,
		nodeRef,
		setRef
	]);
}
var defaultSensors = [{
	sensor: PointerSensor,
	options: {}
}, {
	sensor: KeyboardSensor,
	options: {}
}];
var defaultData = { current: {} };
var defaultMeasuringConfiguration = {
	draggable: { measure: getTransformAgnosticClientRect },
	droppable: {
		measure: getTransformAgnosticClientRect,
		strategy: MeasuringStrategy.WhileDragging,
		frequency: MeasuringFrequency.Optimized
	},
	dragOverlay: { measure: getClientRect }
};
var DroppableContainersMap = class extends Map {
	get(id) {
		var _super$get;
		return id != null ? (_super$get = super.get(id)) != null ? _super$get : void 0 : void 0;
	}
	toArray() {
		return Array.from(this.values());
	}
	getEnabled() {
		return this.toArray().filter((_ref) => {
			let { disabled } = _ref;
			return !disabled;
		});
	}
	getNodeFor(id) {
		var _this$get$node$curren, _this$get;
		return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : void 0;
	}
};
var defaultPublicContext = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /* @__PURE__ */ new Map(),
	droppableRects: /* @__PURE__ */ new Map(),
	droppableContainers: /* @__PURE__ */ new DroppableContainersMap(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: noop
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: defaultMeasuringConfiguration,
	measureDroppableContainers: noop,
	windowRect: null,
	measuringScheduled: false
};
var defaultInternalContext = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: noop,
	draggableNodes: /* @__PURE__ */ new Map(),
	over: null,
	measureDroppableContainers: noop
};
var InternalContext = /* @__PURE__ */ (0, import_react.createContext)(defaultInternalContext);
var PublicContext = /* @__PURE__ */ (0, import_react.createContext)(defaultPublicContext);
function getInitialState() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: /* @__PURE__ */ new Map(),
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: { containers: new DroppableContainersMap() }
	};
}
function reducer(state, action) {
	switch (action.type) {
		case Action.DragStart: return {
			...state,
			draggable: {
				...state.draggable,
				initialCoordinates: action.initialCoordinates,
				active: action.active
			}
		};
		case Action.DragMove:
			if (state.draggable.active == null) return state;
			return {
				...state,
				draggable: {
					...state.draggable,
					translate: {
						x: action.coordinates.x - state.draggable.initialCoordinates.x,
						y: action.coordinates.y - state.draggable.initialCoordinates.y
					}
				}
			};
		case Action.DragEnd:
		case Action.DragCancel: return {
			...state,
			draggable: {
				...state.draggable,
				active: null,
				initialCoordinates: {
					x: 0,
					y: 0
				},
				translate: {
					x: 0,
					y: 0
				}
			}
		};
		case Action.RegisterDroppable: {
			const { element } = action;
			const { id } = element;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.set(id, element);
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		case Action.SetDroppableDisabled: {
			const { id, key, disabled } = action;
			const element = state.droppable.containers.get(id);
			if (!element || key !== element.key) return state;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.set(id, {
				...element,
				disabled
			});
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		case Action.UnregisterDroppable: {
			const { id, key } = action;
			const element = state.droppable.containers.get(id);
			if (!element || key !== element.key) return state;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.delete(id);
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		default: return state;
	}
}
function RestoreFocus(_ref) {
	let { disabled } = _ref;
	const { active, activatorEvent, draggableNodes } = (0, import_react.useContext)(InternalContext);
	const previousActivatorEvent = usePrevious(activatorEvent);
	const previousActiveId = usePrevious(active == null ? void 0 : active.id);
	(0, import_react.useEffect)(() => {
		if (disabled) return;
		if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
			if (!isKeyboardEvent(previousActivatorEvent)) return;
			if (document.activeElement === previousActivatorEvent.target) return;
			const draggableNode = draggableNodes.get(previousActiveId);
			if (!draggableNode) return;
			const { activatorNode, node } = draggableNode;
			if (!activatorNode.current && !node.current) return;
			requestAnimationFrame(() => {
				for (const element of [activatorNode.current, node.current]) {
					if (!element) continue;
					const focusableNode = findFirstFocusableNode(element);
					if (focusableNode) {
						focusableNode.focus();
						break;
					}
				}
			});
		}
	}, [
		activatorEvent,
		disabled,
		draggableNodes,
		previousActiveId,
		previousActivatorEvent
	]);
	return null;
}
function applyModifiers(modifiers, _ref) {
	let { transform, ...args } = _ref;
	return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
		return modifier({
			transform: accumulator,
			...args
		});
	}, transform) : transform;
}
function useMeasuringConfiguration(config) {
	return (0, import_react.useMemo)(() => ({
		draggable: {
			...defaultMeasuringConfiguration.draggable,
			...config == null ? void 0 : config.draggable
		},
		droppable: {
			...defaultMeasuringConfiguration.droppable,
			...config == null ? void 0 : config.droppable
		},
		dragOverlay: {
			...defaultMeasuringConfiguration.dragOverlay,
			...config == null ? void 0 : config.dragOverlay
		}
	}), [
		config == null ? void 0 : config.draggable,
		config == null ? void 0 : config.droppable,
		config == null ? void 0 : config.dragOverlay
	]);
}
function useLayoutShiftScrollCompensation(_ref) {
	let { activeNode, measure, initialRect, config = true } = _ref;
	const initialized = (0, import_react.useRef)(false);
	const { x, y } = typeof config === "boolean" ? {
		x: config,
		y: config
	} : config;
	useIsomorphicLayoutEffect(() => {
		if (!x && !y || !activeNode) {
			initialized.current = false;
			return;
		}
		if (initialized.current || !initialRect) return;
		const node = activeNode == null ? void 0 : activeNode.node.current;
		if (!node || node.isConnected === false) return;
		const rectDelta = getRectDelta(measure(node), initialRect);
		if (!x) rectDelta.x = 0;
		if (!y) rectDelta.y = 0;
		initialized.current = true;
		if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
			const firstScrollableAncestor = getFirstScrollableAncestor(node);
			if (firstScrollableAncestor) firstScrollableAncestor.scrollBy({
				top: rectDelta.y,
				left: rectDelta.x
			});
		}
	}, [
		activeNode,
		x,
		y,
		initialRect,
		measure
	]);
}
var ActiveDraggableContext = /* @__PURE__ */ (0, import_react.createContext)({
	...defaultCoordinates,
	scaleX: 1,
	scaleY: 1
});
var Status;
(function(Status) {
	Status[Status["Uninitialized"] = 0] = "Uninitialized";
	Status[Status["Initializing"] = 1] = "Initializing";
	Status[Status["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));
var DndContext = /* @__PURE__ */ (0, import_react.memo)(function DndContext(_ref) {
	var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
	let { id, accessibility, autoScroll = true, children, sensors = defaultSensors, collisionDetection = rectIntersection, measuring, modifiers, ...props } = _ref;
	const [state, dispatch] = (0, import_react.useReducer)(reducer, void 0, getInitialState);
	const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
	const [status, setStatus] = (0, import_react.useState)(Status.Uninitialized);
	const isInitialized = status === Status.Initialized;
	const { draggable: { active: activeId, nodes: draggableNodes, translate }, droppable: { containers: droppableContainers } } = state;
	const node = activeId != null ? draggableNodes.get(activeId) : null;
	const activeRects = (0, import_react.useRef)({
		initial: null,
		translated: null
	});
	const active = (0, import_react.useMemo)(() => {
		var _node$data;
		return activeId != null ? {
			id: activeId,
			data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
			rect: activeRects
		} : null;
	}, [activeId, node]);
	const activeRef = (0, import_react.useRef)(null);
	const [activeSensor, setActiveSensor] = (0, import_react.useState)(null);
	const [activatorEvent, setActivatorEvent] = (0, import_react.useState)(null);
	const latestProps = useLatestValue(props, Object.values(props));
	const draggableDescribedById = useUniqueId("DndDescribedBy", id);
	const enabledDroppableContainers = (0, import_react.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
	const measuringConfiguration = useMeasuringConfiguration(measuring);
	const { droppableRects, measureDroppableContainers, measuringScheduled } = useDroppableMeasuring(enabledDroppableContainers, {
		dragging: isInitialized,
		dependencies: [translate.x, translate.y],
		config: measuringConfiguration.droppable
	});
	const activeNode = useCachedNode(draggableNodes, activeId);
	const activationCoordinates = (0, import_react.useMemo)(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
	const autoScrollOptions = getAutoScrollerOptions();
	const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
	useLayoutShiftScrollCompensation({
		activeNode: activeId != null ? draggableNodes.get(activeId) : null,
		config: autoScrollOptions.layoutShiftCompensation,
		initialRect: initialActiveNodeRect,
		measure: measuringConfiguration.draggable.measure
	});
	const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
	const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
	const sensorContext = (0, import_react.useRef)({
		activatorEvent: null,
		active: null,
		activeNode,
		collisionRect: null,
		collisions: null,
		droppableRects,
		draggableNodes,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	});
	const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
	const dragOverlay = useDragOverlayMeasuring({ measure: measuringConfiguration.dragOverlay.measure });
	const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
	const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
	const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect);
	const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
	const windowRect = useWindowRect(draggingNode ? getWindow(draggingNode) : null);
	const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
	const scrollableAncestorRects = useRects(scrollableAncestors);
	const modifiedTranslate = applyModifiers(modifiers, {
		transform: {
			x: translate.x - nodeRectDelta.x,
			y: translate.y - nodeRectDelta.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent,
		active,
		activeNodeRect,
		containerNodeRect,
		draggingNodeRect,
		over: sensorContext.current.over,
		overlayNodeRect: dragOverlay.rect,
		scrollableAncestors,
		scrollableAncestorRects,
		windowRect
	});
	const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
	const scrollOffsets = useScrollOffsets(scrollableAncestors);
	const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
	const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
	const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
	const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
	const collisions = active && collisionRect ? collisionDetection({
		active,
		collisionRect,
		droppableRects,
		droppableContainers: enabledDroppableContainers,
		pointerCoordinates
	}) : null;
	const overId = getFirstCollision(collisions, "id");
	const [over, setOver] = (0, import_react.useState)(null);
	const transform = adjustScale(usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta), (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
	const activeSensorRef = (0, import_react.useRef)(null);
	const instantiateSensor = (0, import_react.useCallback)((event, _ref2) => {
		let { sensor: Sensor, options } = _ref2;
		if (activeRef.current == null) return;
		const activeNode = draggableNodes.get(activeRef.current);
		if (!activeNode) return;
		const activatorEvent = event.nativeEvent;
		activeSensorRef.current = new Sensor({
			active: activeRef.current,
			activeNode,
			event: activatorEvent,
			options,
			context: sensorContext,
			onAbort(id) {
				if (!draggableNodes.get(id)) return;
				const { onDragAbort } = latestProps.current;
				const event = { id };
				onDragAbort?.(event);
				dispatchMonitorEvent({
					type: "onDragAbort",
					event
				});
			},
			onPending(id, constraint, initialCoordinates, offset) {
				if (!draggableNodes.get(id)) return;
				const { onDragPending } = latestProps.current;
				const event = {
					id,
					constraint,
					initialCoordinates,
					offset
				};
				onDragPending?.(event);
				dispatchMonitorEvent({
					type: "onDragPending",
					event
				});
			},
			onStart(initialCoordinates) {
				const id = activeRef.current;
				if (id == null) return;
				const draggableNode = draggableNodes.get(id);
				if (!draggableNode) return;
				const { onDragStart } = latestProps.current;
				const event = {
					activatorEvent,
					active: {
						id,
						data: draggableNode.data,
						rect: activeRects
					}
				};
				(0, import_react_dom.unstable_batchedUpdates)(() => {
					onDragStart?.(event);
					setStatus(Status.Initializing);
					dispatch({
						type: Action.DragStart,
						initialCoordinates,
						active: id
					});
					dispatchMonitorEvent({
						type: "onDragStart",
						event
					});
					setActiveSensor(activeSensorRef.current);
					setActivatorEvent(activatorEvent);
				});
			},
			onMove(coordinates) {
				dispatch({
					type: Action.DragMove,
					coordinates
				});
			},
			onEnd: createHandler(Action.DragEnd),
			onCancel: createHandler(Action.DragCancel)
		});
		function createHandler(type) {
			return async function handler() {
				const { active, collisions, over, scrollAdjustedTranslate } = sensorContext.current;
				let event = null;
				if (active && scrollAdjustedTranslate) {
					const { cancelDrop } = latestProps.current;
					event = {
						activatorEvent,
						active,
						collisions,
						delta: scrollAdjustedTranslate,
						over
					};
					if (type === Action.DragEnd && typeof cancelDrop === "function") {
						if (await Promise.resolve(cancelDrop(event))) type = Action.DragCancel;
					}
				}
				activeRef.current = null;
				(0, import_react_dom.unstable_batchedUpdates)(() => {
					dispatch({ type });
					setStatus(Status.Uninitialized);
					setOver(null);
					setActiveSensor(null);
					setActivatorEvent(null);
					activeSensorRef.current = null;
					const eventName = type === Action.DragEnd ? "onDragEnd" : "onDragCancel";
					if (event) {
						const handler = latestProps.current[eventName];
						handler?.(event);
						dispatchMonitorEvent({
							type: eventName,
							event
						});
					}
				});
			};
		}
	}, [draggableNodes]);
	const activators = useCombineActivators(sensors, (0, import_react.useCallback)((handler, sensor) => {
		return (event, active) => {
			const nativeEvent = event.nativeEvent;
			const activeDraggableNode = draggableNodes.get(active);
			if (activeRef.current !== null || !activeDraggableNode || nativeEvent.dndKit || nativeEvent.defaultPrevented) return;
			const activationContext = { active: activeDraggableNode };
			if (handler(event, sensor.options, activationContext) === true) {
				nativeEvent.dndKit = { capturedBy: sensor.sensor };
				activeRef.current = active;
				instantiateSensor(event, sensor);
			}
		};
	}, [draggableNodes, instantiateSensor]));
	useSensorSetup(sensors);
	useIsomorphicLayoutEffect(() => {
		if (activeNodeRect && status === Status.Initializing) setStatus(Status.Initialized);
	}, [activeNodeRect, status]);
	(0, import_react.useEffect)(() => {
		const { onDragMove } = latestProps.current;
		const { active, activatorEvent, collisions, over } = sensorContext.current;
		if (!active || !activatorEvent) return;
		const event = {
			active,
			activatorEvent,
			collisions,
			delta: {
				x: scrollAdjustedTranslate.x,
				y: scrollAdjustedTranslate.y
			},
			over
		};
		(0, import_react_dom.unstable_batchedUpdates)(() => {
			onDragMove?.(event);
			dispatchMonitorEvent({
				type: "onDragMove",
				event
			});
		});
	}, [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
	(0, import_react.useEffect)(() => {
		const { active, activatorEvent, collisions, droppableContainers, scrollAdjustedTranslate } = sensorContext.current;
		if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) return;
		const { onDragOver } = latestProps.current;
		const overContainer = droppableContainers.get(overId);
		const over = overContainer && overContainer.rect.current ? {
			id: overContainer.id,
			rect: overContainer.rect.current,
			data: overContainer.data,
			disabled: overContainer.disabled
		} : null;
		const event = {
			active,
			activatorEvent,
			collisions,
			delta: {
				x: scrollAdjustedTranslate.x,
				y: scrollAdjustedTranslate.y
			},
			over
		};
		(0, import_react_dom.unstable_batchedUpdates)(() => {
			setOver(over);
			onDragOver?.(event);
			dispatchMonitorEvent({
				type: "onDragOver",
				event
			});
		});
	}, [overId]);
	useIsomorphicLayoutEffect(() => {
		sensorContext.current = {
			activatorEvent,
			active,
			activeNode,
			collisionRect,
			collisions,
			droppableRects,
			draggableNodes,
			draggingNode,
			draggingNodeRect,
			droppableContainers,
			over,
			scrollableAncestors,
			scrollAdjustedTranslate
		};
		activeRects.current = {
			initial: draggingNodeRect,
			translated: collisionRect
		};
	}, [
		active,
		activeNode,
		collisions,
		collisionRect,
		draggableNodes,
		draggingNode,
		draggingNodeRect,
		droppableRects,
		droppableContainers,
		over,
		scrollableAncestors,
		scrollAdjustedTranslate
	]);
	useAutoScroller({
		...autoScrollOptions,
		delta: translate,
		draggingRect: collisionRect,
		pointerCoordinates,
		scrollableAncestors,
		scrollableAncestorRects
	});
	const publicContext = (0, import_react.useMemo)(() => {
		return {
			active,
			activeNode,
			activeNodeRect,
			activatorEvent,
			collisions,
			containerNodeRect,
			dragOverlay,
			draggableNodes,
			droppableContainers,
			droppableRects,
			over,
			measureDroppableContainers,
			scrollableAncestors,
			scrollableAncestorRects,
			measuringConfiguration,
			measuringScheduled,
			windowRect
		};
	}, [
		active,
		activeNode,
		activeNodeRect,
		activatorEvent,
		collisions,
		containerNodeRect,
		dragOverlay,
		draggableNodes,
		droppableContainers,
		droppableRects,
		over,
		measureDroppableContainers,
		scrollableAncestors,
		scrollableAncestorRects,
		measuringConfiguration,
		measuringScheduled,
		windowRect
	]);
	const internalContext = (0, import_react.useMemo)(() => {
		return {
			activatorEvent,
			activators,
			active,
			activeNodeRect,
			ariaDescribedById: { draggable: draggableDescribedById },
			dispatch,
			draggableNodes,
			over,
			measureDroppableContainers
		};
	}, [
		activatorEvent,
		activators,
		active,
		activeNodeRect,
		dispatch,
		draggableDescribedById,
		draggableNodes,
		over,
		measureDroppableContainers
	]);
	return import_react.createElement(DndMonitorContext.Provider, { value: registerMonitorListener }, import_react.createElement(InternalContext.Provider, { value: internalContext }, import_react.createElement(PublicContext.Provider, { value: publicContext }, import_react.createElement(ActiveDraggableContext.Provider, { value: transform }, children)), import_react.createElement(RestoreFocus, { disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false })), import_react.createElement(Accessibility, {
		...accessibility,
		hiddenTextDescribedById: draggableDescribedById
	}));
	function getAutoScrollerOptions() {
		const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
		const autoScrollGloballyDisabled = typeof autoScroll === "object" ? autoScroll.enabled === false : autoScroll === false;
		const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
		if (typeof autoScroll === "object") return {
			...autoScroll,
			enabled
		};
		return { enabled };
	}
});
var NullContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var defaultRole = "button";
var ID_PREFIX = "Draggable";
function useDraggable(_ref) {
	let { id, data, disabled = false, attributes } = _ref;
	const key = useUniqueId(ID_PREFIX);
	const { activators, activatorEvent, active, activeNodeRect, ariaDescribedById, draggableNodes, over } = (0, import_react.useContext)(InternalContext);
	const { role = defaultRole, roleDescription = "draggable", tabIndex = 0 } = attributes != null ? attributes : {};
	const isDragging = (active == null ? void 0 : active.id) === id;
	const transform = (0, import_react.useContext)(isDragging ? ActiveDraggableContext : NullContext);
	const [node, setNodeRef] = useNodeRef();
	const [activatorNode, setActivatorNodeRef] = useNodeRef();
	const listeners = useSyntheticListeners(activators, id);
	const dataRef = useLatestValue(data);
	useIsomorphicLayoutEffect(() => {
		draggableNodes.set(id, {
			id,
			key,
			node,
			activatorNode,
			data: dataRef
		});
		return () => {
			const node = draggableNodes.get(id);
			if (node && node.key === key) draggableNodes.delete(id);
		};
	}, [draggableNodes, id]);
	return {
		active,
		activatorEvent,
		activeNodeRect,
		attributes: (0, import_react.useMemo)(() => ({
			role,
			tabIndex,
			"aria-disabled": disabled,
			"aria-pressed": isDragging && role === defaultRole ? true : void 0,
			"aria-roledescription": roleDescription,
			"aria-describedby": ariaDescribedById.draggable
		}), [
			disabled,
			role,
			tabIndex,
			isDragging,
			roleDescription,
			ariaDescribedById.draggable
		]),
		isDragging,
		listeners: disabled ? void 0 : listeners,
		node,
		over,
		setNodeRef,
		setActivatorNodeRef,
		transform
	};
}
function useDndContext() {
	return (0, import_react.useContext)(PublicContext);
}
var ID_PREFIX$1 = "Droppable";
var defaultResizeObserverConfig = { timeout: 25 };
function useDroppable(_ref) {
	let { data, disabled = false, id, resizeObserverConfig } = _ref;
	const key = useUniqueId(ID_PREFIX$1);
	const { active, dispatch, over, measureDroppableContainers } = (0, import_react.useContext)(InternalContext);
	const previous = (0, import_react.useRef)({ disabled });
	const resizeObserverConnected = (0, import_react.useRef)(false);
	const rect = (0, import_react.useRef)(null);
	const callbackId = (0, import_react.useRef)(null);
	const { disabled: resizeObserverDisabled, updateMeasurementsFor, timeout: resizeObserverTimeout } = {
		...defaultResizeObserverConfig,
		...resizeObserverConfig
	};
	const ids = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
	const resizeObserver = useResizeObserver({
		callback: (0, import_react.useCallback)(() => {
			if (!resizeObserverConnected.current) {
				resizeObserverConnected.current = true;
				return;
			}
			if (callbackId.current != null) clearTimeout(callbackId.current);
			callbackId.current = setTimeout(() => {
				measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
				callbackId.current = null;
			}, resizeObserverTimeout);
		}, [resizeObserverTimeout]),
		disabled: resizeObserverDisabled || !active
	});
	const [nodeRef, setNodeRef] = useNodeRef((0, import_react.useCallback)((newElement, previousElement) => {
		if (!resizeObserver) return;
		if (previousElement) {
			resizeObserver.unobserve(previousElement);
			resizeObserverConnected.current = false;
		}
		if (newElement) resizeObserver.observe(newElement);
	}, [resizeObserver]));
	const dataRef = useLatestValue(data);
	(0, import_react.useEffect)(() => {
		if (!resizeObserver || !nodeRef.current) return;
		resizeObserver.disconnect();
		resizeObserverConnected.current = false;
		resizeObserver.observe(nodeRef.current);
	}, [nodeRef, resizeObserver]);
	(0, import_react.useEffect)(() => {
		dispatch({
			type: Action.RegisterDroppable,
			element: {
				id,
				key,
				disabled,
				node: nodeRef,
				rect,
				data: dataRef
			}
		});
		return () => dispatch({
			type: Action.UnregisterDroppable,
			key,
			id
		});
	}, [id]);
	(0, import_react.useEffect)(() => {
		if (disabled !== previous.current.disabled) {
			dispatch({
				type: Action.SetDroppableDisabled,
				id,
				key,
				disabled
			});
			previous.current.disabled = disabled;
		}
	}, [
		id,
		key,
		disabled,
		dispatch
	]);
	return {
		active,
		rect,
		isOver: (over == null ? void 0 : over.id) === id,
		node: nodeRef,
		over,
		setNodeRef
	};
}
function AnimationManager(_ref) {
	let { animation, children } = _ref;
	const [clonedChildren, setClonedChildren] = (0, import_react.useState)(null);
	const [element, setElement] = (0, import_react.useState)(null);
	const previousChildren = usePrevious(children);
	if (!children && !clonedChildren && previousChildren) setClonedChildren(previousChildren);
	useIsomorphicLayoutEffect(() => {
		if (!element) return;
		const key = clonedChildren == null ? void 0 : clonedChildren.key;
		const id = clonedChildren == null ? void 0 : clonedChildren.props.id;
		if (key == null || id == null) {
			setClonedChildren(null);
			return;
		}
		Promise.resolve(animation(id, element)).then(() => {
			setClonedChildren(null);
		});
	}, [
		animation,
		clonedChildren,
		element
	]);
	return import_react.createElement(import_react.Fragment, null, children, clonedChildren ? (0, import_react.cloneElement)(clonedChildren, { ref: setElement }) : null);
}
var defaultTransform = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function NullifiedContextProvider(_ref) {
	let { children } = _ref;
	return import_react.createElement(InternalContext.Provider, { value: defaultInternalContext }, import_react.createElement(ActiveDraggableContext.Provider, { value: defaultTransform }, children));
}
var baseStyles = {
	position: "fixed",
	touchAction: "none"
};
var defaultTransition = (activatorEvent) => {
	return isKeyboardEvent(activatorEvent) ? "transform 250ms ease" : void 0;
};
var PositionedOverlay = /* @__PURE__ */ (0, import_react.forwardRef)((_ref, ref) => {
	let { as, activatorEvent, adjustScale, children, className, rect, style, transform, transition = defaultTransition } = _ref;
	if (!rect) return null;
	const scaleAdjustedTransform = adjustScale ? transform : {
		...transform,
		scaleX: 1,
		scaleY: 1
	};
	const styles = {
		...baseStyles,
		width: rect.width,
		height: rect.height,
		top: rect.top,
		left: rect.left,
		transform: CSS.Transform.toString(scaleAdjustedTransform),
		transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : void 0,
		transition: typeof transition === "function" ? transition(activatorEvent) : transition,
		...style
	};
	return import_react.createElement(as, {
		className,
		style: styles,
		ref
	}, children);
});
var defaultDropAnimationSideEffects = (options) => (_ref) => {
	let { active, dragOverlay } = _ref;
	const originalStyles = {};
	const { styles, className } = options;
	if (styles != null && styles.active) for (const [key, value] of Object.entries(styles.active)) {
		if (value === void 0) continue;
		originalStyles[key] = active.node.style.getPropertyValue(key);
		active.node.style.setProperty(key, value);
	}
	if (styles != null && styles.dragOverlay) for (const [key, value] of Object.entries(styles.dragOverlay)) {
		if (value === void 0) continue;
		dragOverlay.node.style.setProperty(key, value);
	}
	if (className != null && className.active) active.node.classList.add(className.active);
	if (className != null && className.dragOverlay) dragOverlay.node.classList.add(className.dragOverlay);
	return function cleanup() {
		for (const [key, value] of Object.entries(originalStyles)) active.node.style.setProperty(key, value);
		if (className != null && className.active) active.node.classList.remove(className.active);
	};
};
var defaultKeyframeResolver = (_ref2) => {
	let { transform: { initial, final } } = _ref2;
	return [{ transform: CSS.Transform.toString(initial) }, { transform: CSS.Transform.toString(final) }];
};
var defaultDropAnimationConfiguration = {
	duration: 250,
	easing: "ease",
	keyframes: defaultKeyframeResolver,
	sideEffects: /* @__PURE__ */ defaultDropAnimationSideEffects({ styles: { active: { opacity: "0" } } })
};
function useDropAnimation(_ref3) {
	let { config, draggableNodes, droppableContainers, measuringConfiguration } = _ref3;
	return useEvent((id, node) => {
		if (config === null) return;
		const activeDraggable = draggableNodes.get(id);
		if (!activeDraggable) return;
		const activeNode = activeDraggable.node.current;
		if (!activeNode) return;
		const measurableNode = getMeasurableNode(node);
		if (!measurableNode) return;
		const { transform } = getWindow(node).getComputedStyle(node);
		const parsedTransform = parseTransform(transform);
		if (!parsedTransform) return;
		const animation = typeof config === "function" ? config : createDefaultDropAnimation(config);
		scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
		return animation({
			active: {
				id,
				data: activeDraggable.data,
				node: activeNode,
				rect: measuringConfiguration.draggable.measure(activeNode)
			},
			draggableNodes,
			dragOverlay: {
				node,
				rect: measuringConfiguration.dragOverlay.measure(measurableNode)
			},
			droppableContainers,
			measuringConfiguration,
			transform: parsedTransform
		});
	});
}
function createDefaultDropAnimation(options) {
	const { duration, easing, sideEffects, keyframes } = {
		...defaultDropAnimationConfiguration,
		...options
	};
	return (_ref4) => {
		let { active, dragOverlay, transform, ...rest } = _ref4;
		if (!duration) return;
		const delta = {
			x: dragOverlay.rect.left - active.rect.left,
			y: dragOverlay.rect.top - active.rect.top
		};
		const scale = {
			scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
			scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
		};
		const finalTransform = {
			x: transform.x - delta.x,
			y: transform.y - delta.y,
			...scale
		};
		const animationKeyframes = keyframes({
			...rest,
			active,
			dragOverlay,
			transform: {
				initial: transform,
				final: finalTransform
			}
		});
		const [firstKeyframe] = animationKeyframes;
		const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];
		if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) return;
		const cleanup = sideEffects == null ? void 0 : sideEffects({
			active,
			dragOverlay,
			...rest
		});
		const animation = dragOverlay.node.animate(animationKeyframes, {
			duration,
			easing,
			fill: "forwards"
		});
		return new Promise((resolve) => {
			animation.onfinish = () => {
				cleanup?.();
				resolve();
			};
		});
	};
}
var key = 0;
function useKey(id) {
	return (0, import_react.useMemo)(() => {
		if (id == null) return;
		key++;
		return key;
	}, [id]);
}
var DragOverlay = /* @__PURE__ */ import_react.memo((_ref) => {
	let { adjustScale = false, children, dropAnimation: dropAnimationConfig, style, transition, modifiers, wrapperElement = "div", className, zIndex = 999 } = _ref;
	const { activatorEvent, active, activeNodeRect, containerNodeRect, draggableNodes, droppableContainers, dragOverlay, over, measuringConfiguration, scrollableAncestors, scrollableAncestorRects, windowRect } = useDndContext();
	const transform = (0, import_react.useContext)(ActiveDraggableContext);
	const key = useKey(active == null ? void 0 : active.id);
	const modifiedTransform = applyModifiers(modifiers, {
		activatorEvent,
		active,
		activeNodeRect,
		containerNodeRect,
		draggingNodeRect: dragOverlay.rect,
		over,
		overlayNodeRect: dragOverlay.rect,
		scrollableAncestors,
		scrollableAncestorRects,
		transform,
		windowRect
	});
	const initialRect = useInitialValue(activeNodeRect);
	const dropAnimation = useDropAnimation({
		config: dropAnimationConfig,
		draggableNodes,
		droppableContainers,
		measuringConfiguration
	});
	const ref = initialRect ? dragOverlay.setRef : void 0;
	return import_react.createElement(NullifiedContextProvider, null, import_react.createElement(AnimationManager, { animation: dropAnimation }, active && key ? import_react.createElement(PositionedOverlay, {
		key,
		id: active.id,
		ref,
		as: wrapperElement,
		activatorEvent,
		adjustScale,
		className,
		transition,
		rect: initialRect,
		style: {
			zIndex,
			...style
		},
		transform: modifiedTransform
	}, children) : null));
});
//#endregion
//#region app/utils.ts
function daysElapsed(dateStr) {
	if (!dateStr) return null;
	const applied = /* @__PURE__ */ new Date(`${dateStr}T00:00:00`);
	if (Number.isNaN(applied.getTime())) return null;
	const today = /* @__PURE__ */ new Date();
	today.setHours(0, 0, 0, 0);
	return Math.round((today.getTime() - applied.getTime()) / 864e5);
}
function daysSinceApplied(dateStr) {
	const diff = daysElapsed(dateStr);
	if (diff === null) return "—";
	if (diff === 0) return "Today";
	if (diff === 1) return "1 day";
	if (diff > 1) return `${diff} days`;
	if (diff === -1) return "Tomorrow";
	return `in ${Math.abs(diff)} days`;
}
function isStaleJob(job) {
	if (job.status !== "applied" && job.status !== "follow-up") return false;
	const diff = daysElapsed(job.dateApplied);
	return diff !== null && diff > 14;
}
function ageChipTone(job) {
	const diff = daysElapsed(job.dateApplied);
	if (diff === null) return "muted";
	if ((job.status === "applied" || job.status === "follow-up") && diff > 14) return "stale";
	if ((job.status === "applied" || job.status === "follow-up") && diff >= 8) return "aging";
	return "muted";
}
function companyInitials(name) {
	const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
	if (!parts.length) return "?";
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}
function companyAvatarClass(name) {
	const str = String(name || "");
	let hash = 0;
	for (let i = 0; i < str.length; i += 1) hash = hash * 31 + str.charCodeAt(i) >>> 0;
	return AVATAR_TONES[hash % AVATAR_TONES.length];
}
function normalizeStatus(status) {
	if (status === "interview") return "interview-r1";
	return STATUS_IDS.includes(status) ? status : "wishlist";
}
function countByStatus(jobs, status) {
	return jobs.filter((job) => job.status === status).length;
}
function startOfDay(date) {
	const next = new Date(date);
	next.setHours(0, 0, 0, 0);
	return next;
}
function startOfWeekMonday(date) {
	const next = startOfDay(date);
	const day = next.getDay();
	const diff = day === 0 ? 6 : day - 1;
	next.setDate(next.getDate() - diff);
	return next;
}
function isSameDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function formatPercent(value) {
	if (!Number.isFinite(value)) return "0%";
	return `${Math.round(value * 10) / 10}%`;
}
function dashboardStats(jobs) {
	const today = startOfDay(/* @__PURE__ */ new Date());
	const weekStart = startOfWeekMonday(today);
	const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
	const appliedDate = (job) => {
		if (!job.dateApplied) return null;
		const d = /* @__PURE__ */ new Date(`${job.dateApplied}T00:00:00`);
		return Number.isNaN(d.getTime()) ? null : d;
	};
	const appliedThisWeek = jobs.filter((job) => {
		const d = appliedDate(job);
		return d && d >= weekStart && job.status !== "wishlist";
	}).length;
	const appliedThisMonth = jobs.filter((job) => {
		const d = appliedDate(job);
		return d && d >= monthStart && job.status !== "wishlist";
	}).length;
	const interviewCount = jobs.filter((job) => INTERVIEW_STATUSES.includes(job.status)).length;
	const progressed = jobs.filter((job) => POST_WISHLIST.includes(job.status)).length;
	const offer = countByStatus(jobs, "offer");
	const rejected = countByStatus(jobs, "rejected");
	const interviewOrLater = interviewCount + offer + rejected;
	const conversion = progressed ? interviewCount / progressed * 100 : 0;
	const responseRate = jobs.length ? progressed / jobs.length * 100 : 0;
	const interviewToOffer = interviewOrLater ? offer / interviewOrLater * 100 : 0;
	const interviewToRejected = interviewOrLater ? rejected / interviewOrLater * 100 : 0;
	const noResponse = jobs.filter((job) => job.status === "applied" && isStaleJob(job)).length;
	const byColumn = COLUMNS.map((col) => ({
		id: col.id,
		title: col.title,
		color: col.dot,
		bar: col.bar,
		count: countByStatus(jobs, col.id)
	}));
	const total = jobs.length || 1;
	const donut = byColumn.filter((item) => item.count > 0).map((item) => ({
		...item,
		pct: item.count / jobs.length * 100
	}));
	const last10 = [];
	for (let i = 9; i >= 0; i -= 1) {
		const day = new Date(today);
		day.setDate(today.getDate() - i);
		const count = jobs.filter((job) => {
			const d = appliedDate(job);
			return d && isSameDay(d, day);
		}).length;
		last10.push({
			date: day.toISOString().slice(0, 10),
			label: day.toLocaleDateString(void 0, {
				month: "short",
				day: "numeric"
			}),
			dayNumber: day.getDate(),
			count
		});
	}
	const year = today.getFullYear();
	const heatmap = buildHeatmap(jobs, year, appliedDate);
	return {
		total: jobs.length,
		appliedThisWeek,
		appliedThisMonth,
		interviewCount,
		conversion,
		responseRate,
		interviewToOffer,
		interviewToRejected,
		progressed,
		offer,
		rejected,
		noResponse,
		byColumn,
		donut,
		last10,
		heatmap,
		year,
		share: (n) => jobs.length ? Math.round(n / total * 1e3) / 10 : 0
	};
}
function buildHeatmap(jobs, year, appliedDate) {
	const start = new Date(year, 0, 1);
	const end = new Date(year, 11, 31);
	const counts = /* @__PURE__ */ new Map();
	for (const job of jobs) {
		const d = appliedDate(job);
		if (!d || d.getFullYear() !== year) continue;
		const key = d.toISOString().slice(0, 10);
		counts.set(key, (counts.get(key) || 0) + 1);
	}
	const weeks = [];
	const cursor = startOfWeekMonday(start);
	while (cursor <= end || cursor.getDay() !== 1) {
		const week = [];
		for (let i = 0; i < 7; i += 1) {
			const day = new Date(cursor);
			const inYear = day.getFullYear() === year;
			const key = day.toISOString().slice(0, 10);
			week.push({
				date: key,
				count: inYear ? counts.get(key) || 0 : 0,
				inYear
			});
			cursor.setDate(cursor.getDate() + 1);
		}
		weeks.push(week);
		if (cursor.getFullYear() > year) break;
		if (weeks.length > 54) break;
	}
	return weeks;
}
function isValidHttpUrl(value) {
	if (!value) return true;
	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch {
		return false;
	}
}
function uniqueResumes(jobs) {
	const seen = /* @__PURE__ */ new Set();
	for (const job of jobs) {
		const name = (job.resume || "").trim();
		if (name) seen.add(name);
	}
	return [...seen].sort((a, b) => a.localeCompare(b));
}
function uniqueJobSkills(jobs) {
	const seen = /* @__PURE__ */ new Set();
	for (const job of jobs) for (const skill of job.skills || []) {
		const name = String(skill || "").trim();
		if (name) seen.add(name);
	}
	return [...seen];
}
function mergeSkillOptions(customSkills, jobs) {
	const seen = /* @__PURE__ */ new Set();
	const list = [];
	const add = (name) => {
		const trimmed = String(name || "").trim();
		if (!trimmed) return;
		const key = trimmed.toLowerCase();
		if (seen.has(key)) return;
		seen.add(key);
		list.push(trimmed);
	};
	for (const name of SEED_SKILLS) add(name);
	for (const item of customSkills) add(item.name);
	for (const name of uniqueJobSkills(jobs)) add(name);
	return list.sort((a, b) => a.localeCompare(b));
}
function matchesSearch(job, query) {
	const q = query.trim().toLowerCase();
	if (!q) return true;
	const skills = (job.skills || []).join(" ").toLowerCase();
	return job.company.toLowerCase().includes(q) || job.role.toLowerCase().includes(q) || skills.includes(q);
}
function sortJobs(jobs, direction) {
	return [...jobs].sort((a, b) => {
		const da = a.dateApplied || "";
		const db = b.dateApplied || "";
		if (da === db) return (b.updatedAt || 0) - (a.updatedAt || 0);
		return direction === "oldest" ? da.localeCompare(db) : db.localeCompare(da);
	});
}
function isJobShape(value) {
	if (!value || typeof value !== "object") return false;
	const v = value;
	if (typeof v.company !== "string" || typeof v.role !== "string") return false;
	if (v.status && typeof v.status === "string" && !STATUS_IDS.includes(v.status) && v.status !== "interview") return false;
	return true;
}
function normalizeSkills(raw) {
	if (!Array.isArray(raw)) return [];
	const seen = /* @__PURE__ */ new Set();
	const list = [];
	for (const item of raw) {
		const name = String(item || "").trim();
		const key = name.toLowerCase();
		if (!name || seen.has(key)) continue;
		seen.add(key);
		list.push(name);
	}
	return list;
}
function normalizeImportedJob(raw) {
	return {
		id: typeof raw.id === "string" && raw.id ? raw.id : crypto.randomUUID(),
		company: String(raw.company || "").trim(),
		role: String(raw.role || "").trim(),
		linkedinUrl: String(raw.linkedinUrl || "").trim(),
		resume: String(raw.resume || "").trim(),
		dateApplied: String(raw.dateApplied || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)),
		salaryRange: String(raw.salaryRange || "").trim(),
		notes: String(raw.notes || ""),
		description: String(raw.description || ""),
		skills: normalizeSkills(raw.skills),
		status: normalizeStatus(String(raw.status || "wishlist")),
		createdAt: Number(raw.createdAt) || Date.now(),
		updatedAt: Number(raw.updatedAt) || Date.now()
	};
}
function hydrateJob(job) {
	return {
		...job,
		skills: normalizeSkills(job.skills),
		description: job.description || "",
		status: normalizeStatus(job.status)
	};
}
function isInterviewShape(value) {
	if (!value || typeof value !== "object") return false;
	const v = value;
	return Boolean(v.startsAt || v.company || v.role);
}
function normalizeImportedInterview(raw) {
	return {
		id: typeof raw.id === "string" && raw.id ? raw.id : crypto.randomUUID(),
		jobId: typeof raw.jobId === "string" ? raw.jobId : "",
		company: String(raw.company || "").trim(),
		role: String(raw.role || "").trim(),
		startsAt: String(raw.startsAt || (/* @__PURE__ */ new Date()).toISOString()),
		notes: String(raw.notes || "").trim(),
		createdAt: Number(raw.createdAt) || Date.now(),
		updatedAt: Number(raw.updatedAt) || Date.now()
	};
}
function localDateKey(iso) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return "";
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function formatInterviewTime(iso) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return "—";
	return d.toLocaleString(void 0, {
		weekday: "short",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit"
	});
}
function toDatetimeLocal(iso) {
	const d = iso ? new Date(iso) : /* @__PURE__ */ new Date();
	if (Number.isNaN(d.getTime())) return "";
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function fromDatetimeLocal(value) {
	if (!value) return (/* @__PURE__ */ new Date()).toISOString();
	const d = new Date(value);
	return Number.isNaN(d.getTime()) ? (/* @__PURE__ */ new Date()).toISOString() : d.toISOString();
}
//#endregion
//#region app/components/Icons.tsx
var import_jsx_runtime = require_jsx_runtime();
function LinkedInIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" })
	});
}
function PlusIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M12 5v14M5 12h14"
		})
	});
}
function SearchIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
		})
	});
}
function SunIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 7.05 5.64 5.64m12.72 0-1.41 1.41M7.05 16.95l-1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
		})
	});
}
function MoonIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M21 14.3A8.5 8.5 0 1 1 9.7 3 7 7 0 0 0 21 14.3z"
		})
	});
}
function DownloadIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 10l5 5 5-5M12 15V3"
		})
	});
}
function UploadIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 14l5-5 5 5M12 9V21"
		})
	});
}
function CloseIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M6 18 18 6M6 6l12 12"
		})
	});
}
function TrashIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
		})
	});
}
function BoardIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M4 5h4v14H4zM10 5h4v9h-4zM16 5h4v11h-4z"
		})
	});
}
function LogoMark({ className = "h-7 w-7" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "8",
			className: "fill-accent"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M9 21V11h3.2l2.4 6.4L17 11H20v10h-2.2v-6.3L15.6 21h-1.7l-2.2-6.3V21H9z",
			fill: "white"
		})]
	});
}
function GripIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "7",
				cy: "6",
				r: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13",
				cy: "6",
				r: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "7",
				cy: "10",
				r: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13",
				cy: "10",
				r: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "7",
				cy: "14",
				r: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13",
				cy: "14",
				r: "1.2"
			})
		]
	});
}
function CalendarIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M8 3v3M16 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
		})
	});
}
function ChartIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-8"
		})
	});
}
function ChevronLeftIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M15 19 8 12l7-7"
		})
	});
}
function ChevronRightIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "m9 5 7 7-7 7"
		})
	});
}
function PanelLeftIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM9 4v16"
		})
	});
}
//#endregion
//#region app/components/JobCard.tsx
function mergeRefs(...refs) {
	return (node) => {
		for (const ref of refs) if (typeof ref === "function") ref(node);
	};
}
var ageChipClass = {
	muted: "bg-surface-muted text-muted",
	aging: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
	stale: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200"
};
function JobCard({ job, onOpen, overlay = false }) {
	const { attributes, listeners, setNodeRef: setDragRef, isDragging } = useDraggable({
		id: job.id,
		data: {
			type: "job",
			status: job.status
		},
		disabled: overlay
	});
	const { setNodeRef: setDropRef } = useDroppable({
		id: `drop-${job.id}`,
		data: {
			type: "job",
			status: job.status
		},
		disabled: overlay
	});
	const column = COLUMNS.find((c) => c.id === job.status);
	const style = overlay ? void 0 : { opacity: isDragging ? .35 : 1 };
	const tone = ageChipTone(job);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref: overlay ? void 0 : mergeRefs(setDragRef, setDropRef),
		style,
		className: `group relative rounded-xl border border-hairline border-l-[4px] bg-card p-3 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:shadow-md ${column?.accent || "border-l-zinc-400"} ${overlay ? "w-[292px] shadow-xl ring-1 ring-hairline" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2.5",
				children: [
					!overlay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-1.5 -ml-1 cursor-grab touch-none rounded p-0.5 text-muted opacity-0 transition duration-150 group-hover:opacity-100 hover:bg-surface-muted active:cursor-grabbing",
						"aria-label": "Drag card",
						...listeners,
						...attributes,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripIcon, {})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${companyAvatarClass(job.company)}`,
						children: companyInitials(job.company)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen?.(job),
						className: "min-w-0 flex-1 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "truncate text-sm font-semibold tracking-tight text-ink",
							children: job.company
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 truncate text-sm text-muted",
							children: job.role
						})]
					}),
					job.linkedinUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: job.linkedinUrl,
						target: "_blank",
						rel: "noreferrer",
						onClick: (e) => e.stopPropagation(),
						className: "rounded-md p-1 text-[#0A66C2] transition duration-150 hover:bg-sky-50 dark:hover:bg-sky-950/40",
						"aria-label": `Open LinkedIn posting for ${job.company}`,
						title: "Open LinkedIn job",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, {})
					}) : null
				]
			}),
			job.skills?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5 flex flex-wrap gap-1",
				children: [job.skills.slice(0, 3).map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] font-medium text-accent",
					children: skill
				}, skill)), job.skills.length > 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-md px-1.5 py-0.5 text-[10px] text-muted",
					children: ["+", job.skills.length - 3]
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-1.5",
				children: [
					job.resume ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md bg-surface-muted px-1.5 py-0.5 font-mono text-[11px] text-ink",
						children: job.resume
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `rounded-md px-1.5 py-0.5 text-[11px] font-medium ${ageChipClass[tone]}`,
						children: [daysSinceApplied(job.dateApplied), tone === "stale" ? " · stalled" : ""]
					}),
					job.salaryRange ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate rounded-md px-1.5 py-0.5 text-[11px] text-muted",
						children: job.salaryRange
					}) : null
				]
			})
		]
	});
}
//#endregion
//#region app/components/Column.tsx
function Column({ column, jobs, onOpen }) {
	const { setNodeRef, isOver } = useDroppable({
		id: column.id,
		data: {
			type: "column",
			status: column.id
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-full min-w-[275px] max-w-[340px] flex-1 flex-col overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-[3px] w-full ${column.bar}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-3 pt-3 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: `flex items-center gap-2 text-sm font-semibold tracking-tight ${column.header}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${column.dot}` }), column.title]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full px-2 py-0.5 text-xs font-semibold ${column.badge}`,
						children: jobs.length
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 pl-4 text-[11px] text-muted",
					children: column.hint
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setNodeRef,
				className: `kanban-scroll mx-2 mb-2 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto rounded-xl px-1 pb-2 transition duration-150 ${isOver ? column.wellOver : column.well}`,
				children: jobs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 items-center justify-center rounded-lg border border-dashed border-hairline px-3 py-8 text-center text-xs text-muted",
					children: "Drop a card here"
				}) : jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCard, {
					job,
					onOpen
				}, job.id))
			})
		]
	});
}
//#endregion
//#region app/components/Board.tsx
function Board({ jobs, query, dateSort, onOpen, onMove }) {
	const [activeId, setActiveId] = (0, import_react.useState)(null);
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));
	const grouped = (0, import_react.useMemo)(() => {
		const filtered = jobs.filter((job) => matchesSearch(job, query));
		const map = Object.fromEntries(COLUMNS.map((col) => [col.id, []]));
		for (const job of filtered) if (map[job.status]) map[job.status].push(job);
		for (const col of COLUMNS) map[col.id] = sortJobs(map[col.id], dateSort);
		return map;
	}, [
		jobs,
		query,
		dateSort
	]);
	const activeJob = jobs.find((job) => job.id === activeId) || null;
	const resolveStatus = (over) => over?.data?.current?.status || null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full min-h-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DndContext, {
			sensors,
			collisionDetection: closestCorners,
			onDragStart: ({ active }) => setActiveId(active.id),
			onDragCancel: () => setActiveId(null),
			onDragEnd: ({ active, over }) => {
				const status = resolveStatus(over);
				if (status) onMove(active.id, status);
				setActiveId(null);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kanban-scroll flex h-full gap-3 overflow-x-auto px-4 pb-4",
				children: COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
					column,
					jobs: grouped[column.id],
					onOpen
				}, column.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragOverlay, {
				dropAnimation: null,
				children: activeJob ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCard, {
					job: activeJob,
					overlay: true
				}) : null
			})]
		})
	});
}
//#endregion
//#region app/components/ConfirmDialog.tsx
function ConfirmDialog({ open, title, message, confirmLabel = "Delete", onConfirm, onCancel }) {
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") onCancel();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onCancel]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/40 dark:bg-black/70",
			"aria-label": "Close dialog",
			onClick: onCancel
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "confirm-title",
			className: "relative w-full max-w-sm rounded-2xl border border-hairline bg-surface p-5 shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "confirm-title",
						className: "text-base font-semibold tracking-tight text-ink",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onCancel,
						className: "rounded-lg p-1 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-6 text-muted",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onCancel,
						className: "rounded-lg px-3 py-1.5 text-sm font-medium text-ink transition duration-150 hover:bg-surface-muted",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onConfirm,
						className: "rounded-lg bg-rose-600 px-3 py-1.5 text-sm font-semibold text-white transition duration-150 hover:bg-rose-700",
						children: confirmLabel
					})]
				})
			]
		})]
	});
}
//#endregion
//#region app/components/EmptyState.tsx
function EmptyState({ onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full min-h-[280px] items-center justify-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md rounded-2xl border border-hairline bg-surface px-8 py-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold tracking-tight text-ink",
					children: "Start your pipeline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6 text-muted",
					children: "Save a role to Wishlist, then drag it through Applied, Follow-up, interview rounds, and Offer. Everything stays in this browser."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onAdd,
					className: "mt-6 inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition duration-150 hover:bg-accent-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, {}), "Add job"]
				})
			]
		})
	});
}
//#endregion
//#region app/components/Interviews.tsx
var WEEKDAYS = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
];
function dateKeyOf(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function buildMonthGrid(year, month) {
	const offset = (new Date(year, month, 1).getDay() + 6) % 7;
	const start = new Date(year, month, 1 - offset);
	return Array.from({ length: 42 }, (_, i) => {
		const day = new Date(start);
		day.setDate(start.getDate() + i);
		return day;
	});
}
function Interviews({ jobs, interviews, onSave, onRemove }) {
	const today = (0, import_react.useMemo)(() => /* @__PURE__ */ new Date(), []);
	const [cursor, setCursor] = (0, import_react.useState)(() => new Date(today.getFullYear(), today.getMonth(), 1));
	const [selectedKey, setSelectedKey] = (0, import_react.useState)(() => dateKeyOf(today));
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const byDay = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const item of interviews) {
			const key = localDateKey(item.startsAt);
			if (!key) continue;
			const list = map.get(key);
			if (list) list.push(item);
			else map.set(key, [item]);
		}
		for (const list of map.values()) list.sort((a, b) => a.startsAt.localeCompare(b.startsAt));
		return map;
	}, [interviews]);
	const grid = (0, import_react.useMemo)(() => buildMonthGrid(cursor.getFullYear(), cursor.getMonth()), [cursor]);
	const upcoming = (0, import_react.useMemo)(() => {
		const now = today.getTime();
		return interviews.filter((item) => {
			const t = new Date(item.startsAt).getTime();
			return !Number.isNaN(t) && t >= now;
		}).sort((a, b) => a.startsAt.localeCompare(b.startsAt)).slice(0, 6);
	}, [interviews, today]);
	const selectedList = byDay.get(selectedKey) || [];
	const todayKey = dateKeyOf(today);
	const shiftMonth = (delta) => {
		setCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
	};
	const goToday = () => {
		setCursor(new Date(today.getFullYear(), today.getMonth(), 1));
		setSelectedKey(todayKey);
	};
	const openCreate = () => {
		setEditing(null);
		setFormOpen(true);
	};
	const openEdit = (interview) => {
		setEditing(interview);
		setFormOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "kanban-scroll h-full overflow-y-auto px-4 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-hairline bg-surface p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold tracking-tight text-ink",
								children: cursor.toLocaleDateString(void 0, {
									month: "long",
									year: "numeric"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => shiftMonth(-1),
										"aria-label": "Previous month",
										className: "rounded-lg p-1.5 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeftIcon, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: goToday,
										className: "rounded-lg px-2.5 py-1.5 text-sm font-medium text-ink transition duration-150 hover:bg-surface-muted",
										children: "Today"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => shiftMonth(1),
										"aria-label": "Next month",
										className: "rounded-lg p-1.5 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRightIcon, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: openCreate,
										className: "ml-1 inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-accent-hover",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, {}), "Interview"]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 grid grid-cols-7 gap-1",
							children: WEEKDAYS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-1 py-1 text-center text-[11px] font-semibold tracking-wide text-muted uppercase",
								children: day
							}, day))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-7 gap-1",
							children: grid.map((day) => {
								const key = dateKeyOf(day);
								const items = byDay.get(key) || [];
								const inMonth = day.getMonth() === cursor.getMonth();
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSelectedKey(key),
									className: `flex min-h-[76px] flex-col items-start gap-1 rounded-xl border p-1.5 text-left transition duration-150 ${key === selectedKey ? "border-accent bg-accent-soft" : "border-hairline bg-canvas hover:bg-surface-muted"} ${inMonth ? "" : "opacity-40"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${key === todayKey ? "bg-accent text-white" : "text-ink"}`,
										children: day.getDate()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex w-full flex-col gap-0.5",
										children: [items.slice(0, 2).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate rounded-md bg-violet-100 px-1 py-0.5 text-[10px] font-medium text-violet-800 dark:bg-violet-950 dark:text-violet-200",
											children: [
												new Date(item.startsAt).toLocaleTimeString(void 0, {
													hour: "numeric",
													minute: "2-digit"
												}),
												" ",
												item.company || item.role || "Interview"
											]
										}, item.id)), items.length > 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "px-1 text-[10px] font-medium text-muted",
											children: [
												"+",
												items.length - 2,
												" more"
											]
										}) : null]
									})]
								}, key);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-hairline bg-surface p-4 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-sm font-semibold tracking-tight text-ink",
							children: (/* @__PURE__ */ new Date(`${selectedKey}T00:00:00`)).toLocaleDateString(void 0, {
								weekday: "long",
								month: "long",
								day: "numeric"
							})
						}), selectedList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"No interviews scheduled. Use",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-ink",
									children: "Interview"
								}),
								" to add one."
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: selectedList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-xl border border-hairline bg-canvas p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${companyAvatarClass(item.company)}`,
											children: companyInitials(item.company)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate text-sm font-semibold text-ink",
													children: item.company || "Untitled"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate text-xs text-muted",
													children: item.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs font-medium text-violet-700 dark:text-violet-300",
													children: formatInterviewTime(item.startsAt)
												}),
												item.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs leading-5 text-muted",
													children: item.notes
												}) : null
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex shrink-0 flex-col gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => openEdit(item),
												className: "rounded-lg px-2 py-1 text-xs font-medium text-muted transition duration-150 hover:bg-surface-muted hover:text-ink",
												children: "Edit"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setPendingDelete(item),
												"aria-label": "Delete interview",
												className: "rounded-lg p-1 text-muted transition duration-150 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/40",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrashIcon, {})
											})]
										})
									]
								})
							}, item.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-hairline bg-surface p-4 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-3 flex items-center gap-2 text-sm font-semibold tracking-tight text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarIcon, {}), "Upcoming"]
						}), upcoming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Nothing on the calendar yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: upcoming.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									const key = localDateKey(item.startsAt);
									const d = new Date(item.startsAt);
									setCursor(new Date(d.getFullYear(), d.getMonth(), 1));
									setSelectedKey(key);
								},
								className: "w-full rounded-xl px-2 py-1.5 text-left transition duration-150 hover:bg-surface-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-sm font-medium text-ink",
									children: [item.company || "Untitled", item.role ? ` — ${item.role}` : ""]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: formatInterviewTime(item.startsAt)
								})]
							}) }, item.id))
						})]
					})]
				})]
			}),
			formOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InterviewForm, {
				jobs,
				interview: editing,
				defaultDateKey: selectedKey,
				onClose: () => {
					setFormOpen(false);
					setEditing(null);
				},
				onSave: async (draft, id) => {
					const saved = await onSave(draft, id);
					const key = localDateKey(saved.startsAt);
					if (key) {
						const d = new Date(saved.startsAt);
						setCursor(new Date(d.getFullYear(), d.getMonth(), 1));
						setSelectedKey(key);
					}
					setFormOpen(false);
					setEditing(null);
				}
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: Boolean(pendingDelete),
				title: "Delete this interview?",
				message: pendingDelete ? `${pendingDelete.company || "This interview"} on ${formatInterviewTime(pendingDelete.startsAt)} will be removed from this browser.` : "",
				onCancel: () => setPendingDelete(null),
				onConfirm: async () => {
					if (pendingDelete) await onRemove(pendingDelete.id);
					setPendingDelete(null);
				}
			})
		]
	});
}
function InterviewForm({ jobs, interview, defaultDateKey, onClose, onSave }) {
	const [jobId, setJobId] = (0, import_react.useState)(interview?.jobId || "");
	const [company, setCompany] = (0, import_react.useState)(interview?.company || "");
	const [role, setRole] = (0, import_react.useState)(interview?.role || "");
	const [startsAt, setStartsAt] = (0, import_react.useState)(() => interview ? toDatetimeLocal(interview.startsAt) : toDatetimeLocal((/* @__PURE__ */ new Date(`${defaultDateKey}T10:00:00`)).toISOString()));
	const [notes, setNotes] = (0, import_react.useState)(interview?.notes || "");
	const [error, setError] = (0, import_react.useState)("");
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	const pickJob = (id) => {
		setJobId(id);
		const job = jobs.find((item) => item.id === id);
		if (job) {
			setCompany(job.company);
			setRole(job.role);
		}
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!company.trim()) {
			setError("Add a company name or pick a job.");
			return;
		}
		if (!startsAt) {
			setError("Pick a date and time.");
			return;
		}
		setSaving(true);
		try {
			await onSave({
				jobId,
				company,
				role,
				startsAt: fromDatetimeLocal(startsAt),
				notes,
				createdAt: interview?.createdAt
			}, interview?.id);
		} catch {
			setError("Could not save that interview.");
			setSaving(false);
		}
	};
	const field = "w-full rounded-xl border border-hairline bg-canvas px-3 py-2 text-sm text-ink outline-none transition duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30";
	const label = "mb-1 block text-xs font-semibold tracking-wide text-muted uppercase";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/40 dark:bg-black/70",
			"aria-label": "Close dialog",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "relative w-full max-w-md rounded-2xl border border-hairline bg-surface p-5 shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold tracking-tight text-ink",
						children: interview ? "Edit interview" : "Schedule interview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "rounded-lg p-1 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label,
							htmlFor: "interview-job",
							children: "Linked job"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "interview-job",
							value: jobId,
							onChange: (e) => pickJob(e.target.value),
							className: field,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "No linked job"
							}), jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: job.id,
								children: [
									job.company,
									" — ",
									job.role
								]
							}, job.id))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: label,
								htmlFor: "interview-company",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "interview-company",
								value: company,
								onChange: (e) => setCompany(e.target.value),
								placeholder: "Acme Inc.",
								className: field
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: label,
								htmlFor: "interview-role",
								children: "Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "interview-role",
								value: role,
								onChange: (e) => setRole(e.target.value),
								placeholder: "QA Lead",
								className: field
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label,
							htmlFor: "interview-startsAt",
							children: "Date and time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "interview-startsAt",
							type: "datetime-local",
							value: startsAt,
							onChange: (e) => setStartsAt(e.target.value),
							className: field
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label,
							htmlFor: "interview-notes",
							children: "Notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "interview-notes",
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							rows: 3,
							placeholder: "Panel round, interviewer names, meeting link…",
							className: `${field} resize-y`
						})] }),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-rose-600",
							children: error
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "rounded-lg px-3 py-1.5 text-sm font-medium text-ink transition duration-150 hover:bg-surface-muted",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: saving,
						className: "rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-white transition duration-150 hover:bg-accent-hover disabled:opacity-60",
						children: saving ? "Saving…" : "Save"
					})]
				})
			]
		})]
	});
}
//#endregion
//#region app/components/SkillPicker.tsx
var EMPTY_SKILLS = [];
function SkillPicker({ value, options = [], onChange, onCreate }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [highlightIndex, setHighlightIndex] = (0, import_react.useState)(-1);
	const wrapRef = (0, import_react.useRef)(null);
	const listId = (0, import_react.useId)();
	const selected = value || EMPTY_SKILLS;
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return options.filter((name) => {
			if (selected.some((s) => s.toLowerCase() === name.toLowerCase())) return false;
			if (!q) return true;
			return name.toLowerCase().includes(q);
		}).slice(0, 12);
	}, [
		options,
		query,
		selected
	]);
	const canCreate = (() => {
		const q = query.trim();
		if (!q) return false;
		return !(options.some((name) => name.toLowerCase() === q.toLowerCase()) || selected.some((name) => name.toLowerCase() === q.toLowerCase()));
	})();
	const totalItems = filtered.length + (canCreate ? 1 : 0);
	(0, import_react.useEffect)(() => {
		const onDoc = (event) => {
			if (!wrapRef.current?.contains(event.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	const add = async (name) => {
		const next = name.trim();
		if (!next) return;
		if (!selected.some((s) => s.toLowerCase() === next.toLowerCase())) onChange([...selected, next]);
		if (onCreate) await onCreate(next);
		setQuery("");
		setHighlightIndex(-1);
	};
	const remove = (name) => {
		onChange(selected.filter((item) => item !== name));
	};
	const handleKeyDown = (e) => {
		if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
			setOpen(true);
			return;
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setHighlightIndex((prev) => prev + 1 < totalItems ? prev + 1 : 0);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setHighlightIndex((prev) => prev - 1 >= 0 ? prev - 1 : totalItems - 1);
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (highlightIndex >= 0 && highlightIndex < filtered.length) add(filtered[highlightIndex]);
			else if (highlightIndex === filtered.length && canCreate) add(query);
			else if (canCreate) add(query);
			else if (filtered[0]) add(filtered[0]);
		} else if (e.key === "Backspace" && !query && selected.length) remove(selected[selected.length - 1]);
		else if (e.key === "Escape") {
			setOpen(false);
			setHighlightIndex(-1);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: "relative mt-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-lg border border-hairline bg-canvas px-2 py-1.5 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30",
			children: [selected.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 rounded-md bg-accent-soft px-1.5 py-0.5 text-xs font-medium text-accent",
				children: [skill, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-accent/70 hover:text-accent",
					"aria-label": `Remove ${skill}`,
					onClick: () => remove(skill),
					children: "×"
				})]
			}, skill)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "min-w-[120px] flex-1 bg-transparent px-1 py-1 text-sm text-ink outline-none placeholder:text-muted",
				value: query,
				placeholder: selected.length ? "Add another skill" : "Search or add a skill",
				onChange: (e) => {
					setQuery(e.target.value);
					setOpen(true);
					setHighlightIndex(-1);
				},
				onFocus: () => setOpen(true),
				onKeyDown: handleKeyDown,
				"aria-autocomplete": "list",
				"aria-controls": listId,
				"aria-expanded": open
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			id: listId,
			role: "listbox",
			className: "absolute z-20 mt-1 max-h-48 w-full overflow-y-auto rounded-xl border border-hairline bg-surface py-1 shadow-lg",
			children: [
				filtered.map((name, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					role: "option",
					"aria-selected": idx === highlightIndex,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `flex w-full px-3 py-1.5 text-left text-sm transition duration-100 ${idx === highlightIndex ? "bg-accent-soft text-accent font-medium" : "text-ink hover:bg-surface-muted"}`,
						onClick: () => add(name),
						onMouseEnter: () => setHighlightIndex(idx),
						children: name
					})
				}, name)),
				canCreate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					role: "option",
					"aria-selected": highlightIndex === filtered.length,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `flex w-full items-center gap-1.5 px-3 py-1.5 text-left text-sm font-medium transition duration-100 ${highlightIndex === filtered.length ? "bg-accent text-white" : "text-accent hover:bg-accent-soft"}`,
						onClick: () => add(query),
						onMouseEnter: () => setHighlightIndex(filtered.length),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, { className: "h-3.5 w-3.5" }),
							"Add “",
							query.trim(),
							"”"
						]
					})
				}) : null,
				!filtered.length && !canCreate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-3 py-2 text-xs text-muted",
					children: "No matching skills"
				}) : null
			]
		}) : null]
	});
}
//#endregion
//#region app/components/JobForm.tsx
var inputClass = "mt-1.5 w-full rounded-lg border border-hairline bg-canvas px-3 py-2.5 text-sm text-ink outline-none transition duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30";
function toDraft(job) {
	if (!job) return emptyJob();
	return {
		company: job.company,
		role: job.role,
		linkedinUrl: job.linkedinUrl || "",
		resume: job.resume || "",
		dateApplied: job.dateApplied,
		salaryRange: job.salaryRange || "",
		notes: job.notes || "",
		description: job.description || "",
		skills: Array.isArray(job.skills) ? job.skills : [],
		status: job.status,
		createdAt: job.createdAt
	};
}
function JobForm({ open, job, resumes, skillOptions, onCreateSkill, onClose, onSave, onDelete }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobFormPanel, {
		job,
		resumes,
		skillOptions,
		onCreateSkill,
		onClose,
		onSave,
		onDelete
	}, job?.id || "new");
}
function JobFormPanel({ job, resumes, skillOptions, onCreateSkill, onClose, onSave, onDelete }) {
	const formId = (0, import_react.useId)();
	const [draft, setDraft] = (0, import_react.useState)(() => toDraft(job));
	const [errors, setErrors] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	const setField = (key, value) => {
		setDraft((prev) => ({
			...prev,
			[key]: value
		}));
	};
	const validate = () => {
		const next = {};
		if (!draft.company.trim()) next.company = "Company is required";
		if (!draft.role.trim()) next.role = "Role is required";
		if (!isValidHttpUrl(draft.linkedinUrl.trim())) next.linkedinUrl = "Enter a valid http(s) URL";
		if (!draft.dateApplied) next.dateApplied = "Date is required";
		setErrors(next);
		return Object.keys(next).length === 0;
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!validate()) return;
		onSave(draft, job?.id);
	};
	const activeColumn = COLUMNS.find((col) => col.id === draft.status);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40 flex justify-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/30 dark:bg-black/60",
			"aria-label": "Close form",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": `${formId}-title`,
			className: "relative flex h-full w-full max-w-md flex-col border-l border-hairline bg-surface shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-[3px] w-full ${activeColumn?.bar || "bg-accent"}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-start justify-between gap-3 border-b border-hairline px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: `${formId}-title`,
						className: "text-lg font-semibold tracking-tight text-ink",
						children: job ? "Edit job" : "Add job"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Saved locally in this browser."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "rounded-lg p-1.5 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "flex min-h-0 flex-1 flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "kanban-scroll flex-1 space-y-4 overflow-y-auto px-5 py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Company",
								error: errors.company,
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									autoFocus: true,
									className: inputClass,
									value: draft.company,
									onChange: (e) => setField("company", e.target.value),
									placeholder: "Acme Corp"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Job title / role",
								error: errors.role,
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									value: draft.role,
									onChange: (e) => setField("role", e.target.value),
									placeholder: "Senior Software Engineer"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "LinkedIn job URL",
								error: errors.linkedinUrl,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									value: draft.linkedinUrl,
									onChange: (e) => setField("linkedinUrl", e.target.value),
									placeholder: "https://www.linkedin.com/jobs/view/...",
									inputMode: "url"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px] font-semibold text-ink",
								children: "Skills"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillPicker, {
								value: draft.skills,
								options: skillOptions,
								onChange: (skills) => setField("skills", skills),
								onCreate: onCreateSkill
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Job description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 6,
									className: `${inputClass} resize-y`,
									value: draft.description,
									onChange: (e) => setField("description", e.target.value),
									placeholder: "Paste the role description, requirements, and highlights…"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								label: "Resume used",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									list: `${formId}-resumes`,
									value: draft.resume,
									onChange: (e) => setField("resume", e.target.value),
									placeholder: "SDE_Resume_v3"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
									id: `${formId}-resumes`,
									children: resumes.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: name }, name))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Date applied",
									error: errors.dateApplied,
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										className: inputClass,
										value: draft.dateApplied,
										onChange: (e) => setField("dateApplied", e.target.value)
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										className: inputClass,
										value: draft.status,
										onChange: (e) => setField("status", e.target.value),
										children: COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: col.id,
											children: col.title
										}, col.id))
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Salary range",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									value: draft.salaryRange,
									onChange: (e) => setField("salaryRange", e.target.value),
									placeholder: "₹25-30 LPA or $150-180K"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Notes",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									className: `${inputClass} resize-y`,
									value: draft.notes,
									onChange: (e) => setField("notes", e.target.value),
									placeholder: "Recruiter name, referral, next steps…"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "sticky bottom-0 flex items-center justify-between gap-3 border-t border-hairline bg-surface px-5 py-4",
						children: [job ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onDelete,
							className: "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 transition duration-150 hover:bg-rose-50 dark:hover:bg-rose-950/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrashIcon, {}), "Delete"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "rounded-lg px-3 py-2 text-sm font-medium text-ink transition duration-150 hover:bg-surface-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white transition duration-150 hover:bg-accent-hover",
								children: "Save job"
							})]
						})]
					})]
				})
			]
		})]
	});
}
function Field({ label, required, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[13px] font-semibold text-ink",
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-rose-500",
					children: " *"
				}) : null]
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-rose-600",
				children: error
			}) : null
		]
	});
}
//#endregion
//#region app/components/Sidebar.tsx
var NAV = [
	{
		id: "board",
		label: "Board",
		Icon: BoardIcon
	},
	{
		id: "interviews",
		label: "Interviews",
		Icon: CalendarIcon
	},
	{
		id: "statistics",
		label: "Statistics",
		Icon: ChartIcon
	}
];
function Sidebar({ collapsed, onToggleCollapse, view, onViewChange, theme, onToggleTheme, onExport, onImportClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `flex h-full shrink-0 flex-col border-r border-hairline bg-surface shadow-sm transition-[width] duration-200 ease-out ${collapsed ? "w-16" : "w-[220px]"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center gap-2.5 px-3 py-4 ${collapsed ? "justify-center" : "px-4"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "h-8 w-8 shrink-0" }), !collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold tracking-[0.16em] text-muted uppercase",
						children: "Local first"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "truncate text-sm font-semibold tracking-tight text-ink",
						children: "Job Tracker"
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1 px-2",
				children: NAV.map(({ id, label, Icon }) => {
					const active = view === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						title: label,
						"aria-label": label,
						"aria-current": active ? "page" : void 0,
						onClick: () => onViewChange(id),
						className: `flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm font-medium transition duration-150 ${collapsed ? "justify-center" : ""} ${active ? "bg-accent-soft text-accent shadow-sm" : "text-muted hover:bg-surface-muted hover:text-ink"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0" }), !collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }) : null]
					}, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-col gap-1 border-t border-hairline p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarButton, {
						collapsed,
						label: collapsed ? "Expand sidebar" : "Collapse sidebar",
						onClick: onToggleCollapse,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftIcon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarButton, {
						collapsed,
						label: theme === "dark" ? "Light mode" : "Dark mode",
						onClick: onToggleTheme,
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonIcon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarButton, {
						collapsed,
						label: "Export JSON",
						onClick: onExport,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadIcon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarButton, {
						collapsed,
						label: "Import JSON",
						onClick: onImportClick,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadIcon, {})
					})
				]
			})
		]
	});
}
function SidebarButton({ collapsed, label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		title: label,
		"aria-label": label,
		className: `flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm text-muted transition duration-150 hover:bg-surface-muted hover:text-ink ${collapsed ? "justify-center" : ""}`,
		children: [children, !collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }) : null]
	});
}
//#endregion
//#region app/components/Statistics.tsx
var SUMMARY = [
	{
		key: "total",
		label: "Total applications",
		tone: "bg-violet-600 text-white",
		pct: false
	},
	{
		key: "appliedThisWeek",
		label: "Applications this week",
		tone: "bg-sky-600 text-white",
		pct: false
	},
	{
		key: "appliedThisMonth",
		label: "Applications this month",
		tone: "bg-amber-500 text-white",
		pct: false
	},
	{
		key: "conversion",
		label: "Interview conversion",
		tone: "bg-emerald-600 text-white",
		pct: true
	}
];
function heatClass(count) {
	if (!count) return "bg-surface-muted";
	if (count === 1) return "bg-violet-200 dark:bg-violet-900";
	if (count === 2) return "bg-violet-400 dark:bg-violet-700";
	return "bg-violet-600 dark:bg-violet-500";
}
function Statistics({ jobs }) {
	const stats = dashboardStats(jobs);
	const maxLast = Math.max(1, ...stats.last10.map((d) => d.count));
	const maxCol = Math.max(1, ...stats.byColumn.map((c) => c.count));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "kanban-scroll h-full space-y-4 overflow-y-auto px-4 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: SUMMARY.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl p-4 shadow-sm ${card.tone}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wide uppercase opacity-80",
						children: card.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-3xl font-bold tracking-tight",
						children: card.pct ? formatPercent(stats[card.key]) : stats[card.key]
					})]
				}, card.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl border p-4 ${stats.conversion >= 2 ? "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100" : "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: stats.conversion >= 2 ? "Interview rate is solid" : "Interview rate needs a push"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm opacity-80",
						children: [formatPercent(stats.conversion), " of progressed applications are in interview rounds (industry ballpark is ~2%)."]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: stats.appliedThisWeek > 0 ? "Keep the weekly rhythm" : "Apply more this week"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm opacity-80",
						children: stats.appliedThisWeek > 0 ? `You logged ${stats.appliedThisWeek} application${stats.appliedThisWeek === 1 ? "" : "s"} this week.` : "No applications this week yet. A small daily target compounds quickly."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					["Total interviews", stats.interviewCount],
					["Response rate", formatPercent(stats.responseRate)],
					["Interview → Offer", formatPercent(stats.interviewToOffer)],
					["Interview → Rejected", formatPercent(stats.interviewToRejected)]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-surface p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wide text-muted uppercase",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-2xl font-bold text-ink",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-ink",
					children: "Application pipeline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [stats.byColumn.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-[110px] flex-1 rounded-xl bg-canvas p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: col.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-bold text-ink",
								children: col.count
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 overflow-hidden rounded-full bg-surface-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-full rounded-full ${col.bar || col.color}`,
									style: { width: `${Math.round(col.count / maxCol * 100)}%` }
								})
							})
						]
					}, col.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-[110px] flex-1 rounded-xl bg-canvas p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "No response"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-bold text-ink",
							children: stats.noResponse
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-semibold text-ink",
					children: ["Job apply frequency · ", stats.year]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-0.5 overflow-x-auto",
					children: stats.heatmap.map((week, wi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-0.5",
						children: week.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							title: `${day.date}: ${day.count}`,
							className: `h-2.5 w-2.5 rounded-[3px] ${day.inYear ? heatClass(day.count) : "bg-transparent"}`
						}, day.date))
					}, wi))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-surface p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Jobs applied in last 10 days"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex h-36 items-end gap-1",
						children: stats.last10.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col items-center gap-1",
							title: `${day.label}: ${day.count} applied`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-28 w-full items-end rounded-md bg-canvas",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full rounded-md bg-violet-500 transition-all duration-300",
									style: { height: `${Math.max(6, Math.round(day.count / maxLast * 100))}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-medium text-muted",
								children: day.dayNumber
							})]
						}, day.date))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-surface p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Status breakdown"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-32 w-32 shrink-0 items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full w-full rounded-full",
								style: { background: stats.donut.length ? `conic-gradient(${stats.donut.reduce((acc, slice, i) => {
									const colors = [
										"#8b5cf6",
										"#0ea5e9",
										"#f59e0b",
										"#6366f1",
										"#10b981",
										"#f43f5e",
										"#64748b"
									];
									const start = acc.offset;
									const end = start + slice.pct;
									acc.offset = end;
									acc.parts.push(`${colors[i % colors.length]} ${start}% ${end}%`);
									return acc;
								}, {
									offset: 0,
									parts: []
								}).parts.join(", ")})` : "var(--color-surface-muted)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute flex h-20 w-20 flex-col items-center justify-center rounded-full bg-surface shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-ink",
									children: jobs.length
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-muted uppercase tracking-wider",
									children: "total"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex-1 space-y-1.5 text-sm",
							children: stats.byColumn.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${col.color}` }), col.title]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted font-mono",
									children: [
										col.count,
										" (",
										stats.share(col.count),
										"%)"
									]
								})]
							}, col.id))
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
//#region node_modules/idb/build/index.js
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
	return idbProxyableTypes || (idbProxyableTypes = [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	]);
}
function getCursorAdvanceMethods() {
	return cursorAdvanceMethods || (cursorAdvanceMethods = [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	]);
}
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
	const promise = new Promise((resolve, reject) => {
		const unlisten = () => {
			request.removeEventListener("success", success);
			request.removeEventListener("error", error);
		};
		const success = () => {
			resolve(wrap(request.result));
			unlisten();
		};
		const error = () => {
			reject(request.error);
			unlisten();
		};
		request.addEventListener("success", success);
		request.addEventListener("error", error);
	});
	reverseTransformCache.set(promise, request);
	return promise;
}
function cacheDonePromiseForTransaction(tx) {
	if (transactionDoneMap.has(tx)) return;
	const done = new Promise((resolve, reject) => {
		const unlisten = () => {
			tx.removeEventListener("complete", complete);
			tx.removeEventListener("error", error);
			tx.removeEventListener("abort", error);
		};
		const complete = () => {
			resolve();
			unlisten();
		};
		const error = () => {
			reject(tx.error || new DOMException("AbortError", "AbortError"));
			unlisten();
		};
		tx.addEventListener("complete", complete);
		tx.addEventListener("error", error);
		tx.addEventListener("abort", error);
	});
	transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
	get(target, prop, receiver) {
		if (target instanceof IDBTransaction) {
			if (prop === "done") return transactionDoneMap.get(target);
			if (prop === "store") return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
		}
		return wrap(target[prop]);
	},
	set(target, prop, value) {
		target[prop] = value;
		return true;
	},
	has(target, prop) {
		if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) return true;
		return prop in target;
	}
};
function replaceTraps(callback) {
	idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
	if (getCursorAdvanceMethods().includes(func)) return function(...args) {
		func.apply(unwrap(this), args);
		return wrap(this.request);
	};
	return function(...args) {
		return wrap(func.apply(unwrap(this), args));
	};
}
function transformCachableValue(value) {
	if (typeof value === "function") return wrapFunction(value);
	if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
	if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
	return value;
}
function wrap(value) {
	if (value instanceof IDBRequest) return promisifyRequest(value);
	if (transformCache.has(value)) return transformCache.get(value);
	const newValue = transformCachableValue(value);
	if (newValue !== value) {
		transformCache.set(value, newValue);
		reverseTransformCache.set(newValue, value);
	}
	return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);
/**
* Open a database.
*
* @param name Name of the database.
* @param version Schema version.
* @param callbacks Additional callbacks.
*/
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
	const request = indexedDB.open(name, version);
	const openPromise = wrap(request);
	if (upgrade) request.addEventListener("upgradeneeded", (event) => {
		upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
	});
	if (blocked) request.addEventListener("blocked", (event) => blocked(event.oldVersion, event.newVersion, event));
	openPromise.then((db) => {
		if (terminated) db.addEventListener("close", () => terminated());
		if (blocking) db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
	}).catch(() => {});
	return openPromise;
}
var readMethods = [
	"get",
	"getKey",
	"getAll",
	"getAllKeys",
	"count"
];
var writeMethods = [
	"put",
	"add",
	"delete",
	"clear"
];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
	if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) return;
	if (cachedMethods.get(prop)) return cachedMethods.get(prop);
	const targetFuncName = prop.replace(/FromIndex$/, "");
	const useIndex = prop !== targetFuncName;
	const isWrite = writeMethods.includes(targetFuncName);
	if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
	const method = async function(storeName, ...args) {
		const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
		let target = tx.store;
		if (useIndex) target = target.index(args.shift());
		return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];
	};
	cachedMethods.set(prop, method);
	return method;
}
replaceTraps((oldTraps) => ({
	...oldTraps,
	get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
	has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
var advanceMethodProps = [
	"continue",
	"continuePrimaryKey",
	"advance"
];
var methodMap = {};
var advanceResults = /* @__PURE__ */ new WeakMap();
var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
var cursorIteratorTraps = { get(target, prop) {
	if (!advanceMethodProps.includes(prop)) return target[prop];
	let cachedFunc = methodMap[prop];
	if (!cachedFunc) cachedFunc = methodMap[prop] = function(...args) {
		advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
	};
	return cachedFunc;
} };
async function* iterate(...args) {
	let cursor = this;
	if (!(cursor instanceof IDBCursor)) cursor = await cursor.openCursor(...args);
	if (!cursor) return;
	cursor = cursor;
	const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
	ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
	reverseTransformCache.set(proxiedCursor, unwrap(cursor));
	while (cursor) {
		yield proxiedCursor;
		cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
		advanceResults.delete(proxiedCursor);
	}
}
function isIteratorProp(target, prop) {
	return prop === Symbol.asyncIterator && instanceOfAny(target, [
		IDBIndex,
		IDBObjectStore,
		IDBCursor
	]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
}
replaceTraps((oldTraps) => ({
	...oldTraps,
	get(target, prop, receiver) {
		if (isIteratorProp(target, prop)) return iterate;
		return oldTraps.get(target, prop, receiver);
	},
	has(target, prop) {
		return isIteratorProp(target, prop) || oldTraps.has(target, prop);
	}
}));
//#endregion
//#region app/job-db.ts
var DB_NAME = "job-tracker";
var DB_VERSION = 2;
var JOBS = "jobs";
var INTERVIEWS = "interviews";
var SKILLS = "skills";
function getDb() {
	return openDB(DB_NAME, DB_VERSION, { upgrade(db) {
		if (!db.objectStoreNames.contains(JOBS)) {
			const store = db.createObjectStore(JOBS, { keyPath: "id" });
			store.createIndex("status", "status");
			store.createIndex("dateApplied", "dateApplied");
		}
		if (!db.objectStoreNames.contains(INTERVIEWS)) db.createObjectStore(INTERVIEWS, { keyPath: "id" }).createIndex("startsAt", "startsAt");
		if (!db.objectStoreNames.contains(SKILLS)) db.createObjectStore(SKILLS, { keyPath: "name" });
	} });
}
async function getAllJobs() {
	return (await getDb()).getAll(JOBS);
}
async function putJob(job) {
	await (await getDb()).put(JOBS, job);
}
async function deleteJob(id) {
	await (await getDb()).delete(JOBS, id);
}
async function replaceAllJobs(jobs) {
	const tx = (await getDb()).transaction(JOBS, "readwrite");
	await tx.store.clear();
	await Promise.all(jobs.map((job) => tx.store.put(job)));
	await tx.done;
}
async function getAllInterviews() {
	return (await getDb()).getAll(INTERVIEWS);
}
async function putInterview(interview) {
	await (await getDb()).put(INTERVIEWS, interview);
}
async function deleteInterview(id) {
	await (await getDb()).delete(INTERVIEWS, id);
}
async function replaceAllInterviews(interviews) {
	const tx = (await getDb()).transaction(INTERVIEWS, "readwrite");
	await tx.store.clear();
	await Promise.all(interviews.map((item) => tx.store.put(item)));
	await tx.done;
}
async function getAllSkills() {
	return (await getDb()).getAll(SKILLS);
}
async function putSkill(skill) {
	await (await getDb()).put(SKILLS, skill);
}
async function replaceAllSkills(skills) {
	const tx = (await getDb()).transaction(SKILLS, "readwrite");
	await tx.store.clear();
	await Promise.all(skills.map((item) => tx.store.put(item)));
	await tx.done;
}
//#endregion
//#region app/hooks/useInterviews.ts
function useInterviews() {
	const [interviews, setInterviews] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		getAllInterviews().then((rows) => {
			if (!cancelled) {
				setInterviews(rows.map((r) => normalizeImportedInterview(r)));
				setReady(true);
			}
		}).catch(() => {
			if (!cancelled) setReady(true);
		});
		return () => {
			cancelled = true;
		};
	}, []);
	return {
		interviews,
		ready,
		saveInterview: (0, import_react.useCallback)(async (draft, existingId) => {
			const now = Date.now();
			const interview = {
				id: existingId || crypto.randomUUID(),
				jobId: draft.jobId || "",
				company: (draft.company || "").trim(),
				role: (draft.role || "").trim(),
				startsAt: draft.startsAt || (/* @__PURE__ */ new Date()).toISOString(),
				notes: (draft.notes || "").trim(),
				createdAt: draft.createdAt || now,
				updatedAt: now
			};
			await putInterview(interview);
			setInterviews((prev) => {
				const index = prev.findIndex((item) => item.id === interview.id);
				if (index === -1) return [...prev, interview];
				const next = [...prev];
				next[index] = interview;
				return next;
			});
			return interview;
		}, []),
		removeInterview: (0, import_react.useCallback)(async (id) => {
			await deleteInterview(id);
			setInterviews((prev) => prev.filter((item) => item.id !== id));
		}, []),
		importInterviews: (0, import_react.useCallback)(async (list) => {
			const normalized = (Array.isArray(list) ? list : []).filter(isInterviewShape).map((item) => normalizeImportedInterview(item));
			await replaceAllInterviews(normalized);
			setInterviews(normalized);
			return normalized.length;
		}, [])
	};
}
//#endregion
//#region app/hooks/useJobs.ts
function useJobs() {
	const [jobs, setJobs] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		getAllJobs().then(async (rows) => {
			const next = [];
			for (const row of rows) {
				const job = hydrateJob(row);
				if (job.status !== row.status || !Array.isArray(row.skills) || row.description == null) await putJob(job);
				next.push(job);
			}
			if (!cancelled) {
				setJobs(next);
				setReady(true);
			}
		}).catch((err) => {
			if (!cancelled) {
				setError(err.message || "Failed to load jobs");
				setReady(true);
			}
		});
		return () => {
			cancelled = true;
		};
	}, []);
	return {
		jobs,
		ready,
		error,
		saveJob: (0, import_react.useCallback)(async (draft, existingId) => {
			const now = Date.now();
			const job = {
				company: draft.company.trim(),
				role: draft.role.trim(),
				linkedinUrl: (draft.linkedinUrl || "").trim(),
				resume: (draft.resume || "").trim(),
				dateApplied: draft.dateApplied || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				salaryRange: (draft.salaryRange || "").trim(),
				notes: (draft.notes || "").trim(),
				description: (draft.description || "").trim(),
				skills: Array.isArray(draft.skills) ? draft.skills : [],
				status: draft.status || "wishlist",
				id: existingId || crypto.randomUUID(),
				createdAt: draft.createdAt || now,
				updatedAt: now
			};
			await putJob(job);
			setJobs((prev) => {
				const index = prev.findIndex((item) => item.id === job.id);
				if (index === -1) return [...prev, job];
				const next = [...prev];
				next[index] = job;
				return next;
			});
			return job;
		}, []),
		moveJob: (0, import_react.useCallback)(async (id, status) => {
			let next = null;
			setJobs((prev) => {
				const current = prev.find((job) => job.id === id);
				if (!current || current.status === status) return prev;
				next = {
					...current,
					status,
					updatedAt: Date.now()
				};
				return prev.map((job) => job.id === id ? next : job);
			});
			if (next) await putJob(next);
		}, []),
		removeJob: (0, import_react.useCallback)(async (id) => {
			await deleteJob(id);
			setJobs((prev) => prev.filter((job) => job.id !== id));
		}, []),
		importJobs: (0, import_react.useCallback)(async (payload) => {
			const list = Array.isArray(payload) ? payload : payload?.jobs;
			if (!Array.isArray(list)) throw new Error("JSON must be an array of jobs (or { jobs: [...] })");
			const normalized = list.filter(isJobShape).map(normalizeImportedJob);
			await replaceAllJobs(normalized);
			setJobs(normalized);
			return normalized.length;
		}, []),
		setJobs
	};
}
//#endregion
//#region app/hooks/useSkills.ts
function useSkills() {
	const [customSkills, setCustomSkills] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		getAllSkills().then((rows) => {
			if (!cancelled) setCustomSkills(rows);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, []);
	return {
		customSkills,
		addSkill: (0, import_react.useCallback)(async (name) => {
			const trimmed = String(name || "").trim();
			if (!trimmed) return trimmed;
			const record = { name: trimmed };
			await putSkill(record);
			setCustomSkills((prev) => {
				if (prev.some((item) => item.name.toLowerCase() === trimmed.toLowerCase())) return prev;
				return [...prev, record];
			});
			return trimmed;
		}, []),
		importSkills: (0, import_react.useCallback)(async (list) => {
			const normalized = (Array.isArray(list) ? list : []).map((item) => ({ name: String(typeof item === "string" ? item : item?.name || "").trim() })).filter((item) => item.name);
			await replaceAllSkills(normalized);
			setCustomSkills(normalized);
			return normalized.length;
		}, [])
	};
}
//#endregion
//#region app/hooks/usePersistentValue.ts
/**
* A tiny localStorage-backed store.
*
* Reading localStorage during render breaks hydration (the server has no
* localStorage, so the first client render disagrees with the server HTML and
* React throws). `useSyncExternalStore` is the supported way to do this: React
* hydrates with the server snapshot, then immediately re-renders with the real
* client value.
*/
var listeners = /* @__PURE__ */ new Set();
function emit() {
	for (const listener of listeners) listener();
}
function subscribe(onChange) {
	listeners.add(onChange);
	window.addEventListener("storage", onChange);
	return () => {
		listeners.delete(onChange);
		window.removeEventListener("storage", onChange);
	};
}
function readStored(key) {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}
function writeStored(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch {}
	emit();
}
/**
* @param key          localStorage key
* @param serverValue  value used for SSR and the hydrating render
* @param parse        turns the stored string (or null) into the value
*/
function usePersistentValue(key, serverValue, parse) {
	return [(0, import_react.useSyncExternalStore)(subscribe, () => parse(readStored(key)), () => serverValue), (0, import_react.useCallback)((next) => {
		writeStored(key, next);
	}, [key])];
}
//#endregion
//#region app/hooks/useTheme.ts
var THEME_KEY = "job-tracker-theme";
function parseTheme(raw) {
	if (raw === "light" || raw === "dark") return raw;
	return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function useTheme() {
	const [theme] = usePersistentValue(THEME_KEY, "light", parseTheme);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);
	return {
		theme,
		toggleTheme: () => writeStored(THEME_KEY, theme === "dark" ? "light" : "dark")
	};
}
//#endregion
//#region app/job-tracker.tsx
function JobTracker() {
	const { jobs, ready, error, saveJob, moveJob, removeJob, importJobs } = useJobs();
	const { interviews, saveInterview, removeInterview, importInterviews } = useInterviews();
	const { customSkills, addSkill, importSkills } = useSkills();
	const { theme, toggleTheme } = useTheme();
	const fileRef = (0, import_react.useRef)(null);
	const [view, setView] = (0, import_react.useState)("board");
	const [collapsed, setCollapsed] = usePersistentValue(SIDEBAR_COLLAPSED_KEY, false, (raw) => raw === "1");
	const [query, setQuery] = (0, import_react.useState)("");
	const [dateSort, setDateSort] = (0, import_react.useState)("newest");
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)("");
	const skillOptions = (0, import_react.useMemo)(() => mergeSkillOptions(customSkills, jobs), [customSkills, jobs]);
	const onToggleCollapse = () => {
		setCollapsed(collapsed ? "0" : "1");
	};
	const openCreate = () => {
		setEditing(null);
		setFormOpen(true);
	};
	const openEdit = (job) => {
		setEditing(job);
		setFormOpen(true);
	};
	const handleSave = async (draft, id) => {
		await saveJob(draft, id);
		setFormOpen(false);
		setEditing(null);
	};
	const handleExport = () => {
		const blob = new Blob([JSON.stringify({
			version: 2,
			jobs,
			interviews,
			skills: customSkills
		}, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `job-tracker-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(url);
	};
	const handleImport = async (event) => {
		const file = event.target.files?.[0];
		event.target.value = "";
		if (!file) return;
		if (jobs.length > 0 || interviews.length > 0) {
			if (!window.confirm("Import will replace jobs, interviews, and custom skills in this browser. Continue?")) return;
		}
		try {
			const payload = JSON.parse(await file.text());
			const jobCount = await importJobs(payload);
			const interviewCount = await importInterviews(Array.isArray(payload) ? [] : payload.interviews || []);
			const skillCount = await importSkills(Array.isArray(payload) ? [] : payload.skills || []);
			setNotice(`Restored ${[
				`${jobCount} job${jobCount === 1 ? "" : "s"}`,
				`${interviewCount} interview${interviewCount === 1 ? "" : "s"}`,
				`${skillCount} custom skill${skillCount === 1 ? "" : "s"}`
			].join(", ")} from backup.`);
		} catch (err) {
			setNotice(err instanceof Error ? err.message : "Could not import that file.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen w-screen overflow-hidden bg-canvas text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
				collapsed,
				onToggleCollapse,
				view,
				onViewChange: setView,
				theme,
				onToggleTheme: toggleTheme,
				onExport: handleExport,
				onImportClick: () => fileRef.current?.click()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				accept: "application/json",
				className: "hidden",
				onChange: handleImport
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "border-b border-hairline bg-surface/90 px-4 py-3 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [view === "board" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "relative min-w-[200px] flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (e) => setQuery(e.target.value),
									placeholder: "Search company, role, or skill",
									className: "w-full rounded-xl border border-hairline bg-canvas py-2 pr-3 pl-9 text-sm text-ink outline-none transition duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Sort"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: dateSort,
									onChange: (e) => setDateSort(e.target.value),
									className: "rounded-xl border border-hairline bg-surface px-2 py-2 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "newest",
										children: "Newest first"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "oldest",
										children: "Oldest first"
									})]
								})]
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold tracking-tight text-ink",
									children: view === "interviews" ? "Interviews" : "Statistics"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: view === "interviews" ? "Log upcoming interview dates and times on the calendar." : "Pipeline health from the jobs stored in this browser."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: openCreate,
								className: "inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-accent-hover",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, {}), "Add job"]
							})]
						})
					}),
					notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-b border-hairline bg-accent-soft px-4 py-2 text-sm text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: notice }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-muted hover:text-ink",
							onClick: () => setNotice(""),
							children: "Dismiss"
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "min-h-0 flex-1 overflow-hidden pt-3",
						children: !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-4 text-sm text-muted",
							children: "Loading…"
						}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-4 text-sm text-rose-600",
							children: error
						}) : view === "interviews" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Interviews, {
							jobs,
							interviews,
							onSave: saveInterview,
							onRemove: removeInterview
						}) : view === "statistics" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Statistics, { jobs }) : jobs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onAdd: openCreate }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, {
							jobs,
							query,
							dateSort,
							onOpen: openEdit,
							onMove: moveJob
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobForm, {
				open: formOpen,
				job: editing,
				resumes: uniqueResumes(jobs),
				skillOptions,
				onCreateSkill: addSkill,
				onClose: () => {
					setFormOpen(false);
					setEditing(null);
				},
				onSave: handleSave,
				onDelete: () => setPendingDelete(editing)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: Boolean(pendingDelete),
				title: "Delete this job?",
				message: pendingDelete ? `${pendingDelete.company} — ${pendingDelete.role} will be removed from this browser.` : "",
				onCancel: () => setPendingDelete(null),
				onConfirm: async () => {
					if (pendingDelete) await removeJob(pendingDelete.id);
					setPendingDelete(null);
					setFormOpen(false);
					setEditing(null);
				}
			})
		]
	});
}
//#endregion
export { JobTracker as default };
