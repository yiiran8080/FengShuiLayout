(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/43146_@dnd-kit_core_dist_core_esm_a3578c96.js", {

"[project]/node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AutoScrollActivator": (()=>AutoScrollActivator),
    "DndContext": (()=>DndContext),
    "DragOverlay": (()=>DragOverlay),
    "KeyboardCode": (()=>KeyboardCode),
    "KeyboardSensor": (()=>KeyboardSensor),
    "MeasuringFrequency": (()=>MeasuringFrequency),
    "MeasuringStrategy": (()=>MeasuringStrategy),
    "MouseSensor": (()=>MouseSensor),
    "PointerSensor": (()=>PointerSensor),
    "TouchSensor": (()=>TouchSensor),
    "TraversalOrder": (()=>TraversalOrder),
    "applyModifiers": (()=>applyModifiers),
    "closestCenter": (()=>closestCenter),
    "closestCorners": (()=>closestCorners),
    "defaultAnnouncements": (()=>defaultAnnouncements),
    "defaultCoordinates": (()=>defaultCoordinates),
    "defaultDropAnimation": (()=>defaultDropAnimationConfiguration),
    "defaultDropAnimationSideEffects": (()=>defaultDropAnimationSideEffects),
    "defaultKeyboardCoordinateGetter": (()=>defaultKeyboardCoordinateGetter),
    "defaultScreenReaderInstructions": (()=>defaultScreenReaderInstructions),
    "getClientRect": (()=>getClientRect),
    "getFirstCollision": (()=>getFirstCollision),
    "getScrollableAncestors": (()=>getScrollableAncestors),
    "pointerWithin": (()=>pointerWithin),
    "rectIntersection": (()=>rectIntersection),
    "useDndContext": (()=>useDndContext),
    "useDndMonitor": (()=>useDndMonitor),
    "useDraggable": (()=>useDraggable),
    "useDroppable": (()=>useDroppable),
    "useSensor": (()=>useSensor),
    "useSensors": (()=>useSensors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@19.1.0/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$accessibility$40$3$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$accessibility$2f$dist$2f$accessibility$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.1.0/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js [app-client] (ecmascript)");
;
;
;
;
const DndMonitorContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useDndMonitor(listener) {
    const registerListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DndMonitorContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDndMonitor.useEffect": ()=>{
            if (!registerListener) {
                throw new Error('useDndMonitor must be used within a children of <DndContext>');
            }
            const unsubscribe = registerListener(listener);
            return unsubscribe;
        }
    }["useDndMonitor.useEffect"], [
        listener,
        registerListener
    ]);
}
function useDndMonitorProvider() {
    const [listeners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useDndMonitorProvider.useState": ()=>new Set()
    }["useDndMonitorProvider.useState"]);
    const registerListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDndMonitorProvider.useCallback[registerListener]": (listener)=>{
            listeners.add(listener);
            return ({
                "useDndMonitorProvider.useCallback[registerListener]": ()=>listeners.delete(listener)
            })["useDndMonitorProvider.useCallback[registerListener]"];
        }
    }["useDndMonitorProvider.useCallback[registerListener]"], [
        listeners
    ]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDndMonitorProvider.useCallback[dispatch]": (_ref)=>{
            let { type, event } = _ref;
            listeners.forEach({
                "useDndMonitorProvider.useCallback[dispatch]": (listener)=>{
                    var _listener$type;
                    return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
                }
            }["useDndMonitorProvider.useCallback[dispatch]"]);
        }
    }["useDndMonitorProvider.useCallback[dispatch]"], [
        listeners
    ]);
    return [
        dispatch,
        registerListener
    ];
}
const defaultScreenReaderInstructions = {
    draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
const defaultAnnouncements = {
    onDragStart (_ref) {
        let { active } = _ref;
        return "Picked up draggable item " + active.id + ".";
    },
    onDragOver (_ref2) {
        let { active, over } = _ref2;
        if (over) {
            return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
        }
        return "Draggable item " + active.id + " is no longer over a droppable area.";
    },
    onDragEnd (_ref3) {
        let { active, over } = _ref3;
        if (over) {
            return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
        }
        return "Draggable item " + active.id + " was dropped.";
    },
    onDragCancel (_ref4) {
        let { active } = _ref4;
        return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
    }
};
function Accessibility(_ref) {
    let { announcements = defaultAnnouncements, container, hiddenTextDescribedById, screenReaderInstructions = defaultScreenReaderInstructions } = _ref;
    const { announce, announcement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$accessibility$40$3$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$accessibility$2f$dist$2f$accessibility$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnnouncement"])();
    const liveRegionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])("DndLiveRegion");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Accessibility.useEffect": ()=>{
            setMounted(true);
        }
    }["Accessibility.useEffect"], []);
    useDndMonitor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Accessibility.useDndMonitor.useMemo": ()=>({
                onDragStart (_ref2) {
                    let { active } = _ref2;
                    announce(announcements.onDragStart({
                        active
                    }));
                },
                onDragMove (_ref3) {
                    let { active, over } = _ref3;
                    if (announcements.onDragMove) {
                        announce(announcements.onDragMove({
                            active,
                            over
                        }));
                    }
                },
                onDragOver (_ref4) {
                    let { active, over } = _ref4;
                    announce(announcements.onDragOver({
                        active,
                        over
                    }));
                },
                onDragEnd (_ref5) {
                    let { active, over } = _ref5;
                    announce(announcements.onDragEnd({
                        active,
                        over
                    }));
                },
                onDragCancel (_ref6) {
                    let { active, over } = _ref6;
                    announce(announcements.onDragCancel({
                        active,
                        over
                    }));
                }
            })
    }["Accessibility.useDndMonitor.useMemo"], [
        announce,
        announcements
    ]));
    if (!mounted) {
        return null;
    }
    const markup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$accessibility$40$3$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$accessibility$2f$dist$2f$accessibility$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenText"], {
        id: hiddenTextDescribedById,
        value: screenReaderInstructions.draggable
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$accessibility$40$3$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$accessibility$2f$dist$2f$accessibility$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveRegion"], {
        id: liveRegionId,
        announcement: announcement
    }));
    return container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(markup, container) : markup;
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSensor.useMemo": ()=>({
                sensor,
                options: options != null ? options : {}
            })
    }["useSensor.useMemo"], [
        sensor,
        options
    ]);
}
function useSensors() {
    for(var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++){
        sensors[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSensors.useMemo": ()=>[
                ...sensors
            ].filter({
                "useSensors.useMemo": (sensor)=>sensor != null
            }["useSensors.useMemo"])
    }["useSensors.useMemo"], [
        ...sensors
    ]);
}
const defaultCoordinates = /*#__PURE__*/ Object.freeze({
    x: 0,
    y: 0
});
/**
 * Returns the distance between two points
 */ function distanceBetween(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function getRelativeTransformOrigin(event, rect) {
    const eventCoordinates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventCoordinates"])(event);
    if (!eventCoordinates) {
        return '0 0';
    }
    const transformOrigin = {
        x: (eventCoordinates.x - rect.left) / rect.width * 100,
        y: (eventCoordinates.y - rect.top) / rect.height * 100
    };
    return transformOrigin.x + "% " + transformOrigin.y + "%";
}
/**
 * Sort collisions from smallest to greatest value
 */ function sortCollisionsAsc(_ref, _ref2) {
    let { data: { value: a } } = _ref;
    let { data: { value: b } } = _ref2;
    return a - b;
}
/**
 * Sort collisions from greatest to smallest value
 */ function sortCollisionsDesc(_ref3, _ref4) {
    let { data: { value: a } } = _ref3;
    let { data: { value: b } } = _ref4;
    return b - a;
}
/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */ function cornersOfRectangle(_ref5) {
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
    if (!collisions || collisions.length === 0) {
        return null;
    }
    const [firstCollision] = collisions;
    return property ? firstCollision[property] : firstCollision;
}
/**
 * Returns the coordinates of the center of a given ClientRect
 */ function centerOfRectangle(rect, left, top) {
    if (left === void 0) {
        left = rect.left;
    }
    if (top === void 0) {
        top = rect.top;
    }
    return {
        x: left + rect.width * 0.5,
        y: top + rect.height * 0.5
    };
}
/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */ const closestCenter = (_ref)=>{
    let { collisionRect, droppableRects, droppableContainers } = _ref;
    const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
    const collisions = [];
    for (const droppableContainer of droppableContainers){
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);
        if (rect) {
            const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
            collisions.push({
                id,
                data: {
                    droppableContainer,
                    value: distBetween
                }
            });
        }
    }
    return collisions.sort(sortCollisionsAsc);
};
/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */ const closestCorners = (_ref)=>{
    let { collisionRect, droppableRects, droppableContainers } = _ref;
    const corners = cornersOfRectangle(collisionRect);
    const collisions = [];
    for (const droppableContainer of droppableContainers){
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);
        if (rect) {
            const rectCorners = cornersOfRectangle(rect);
            const distances = corners.reduce((accumulator, corner, index)=>{
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
 */ function getIntersectionRatio(entry, target) {
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
    } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)
    return 0;
}
/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */ const rectIntersection = (_ref)=>{
    let { collisionRect, droppableRects, droppableContainers } = _ref;
    const collisions = [];
    for (const droppableContainer of droppableContainers){
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);
        if (rect) {
            const intersectionRatio = getIntersectionRatio(rect, collisionRect);
            if (intersectionRatio > 0) {
                collisions.push({
                    id,
                    data: {
                        droppableContainer,
                        value: intersectionRatio
                    }
                });
            }
        }
    }
    return collisions.sort(sortCollisionsDesc);
};
/**
 * Check if a given point is contained within a bounding rectangle
 */ function isPointWithinRect(point, rect) {
    const { top, left, bottom, right } = rect;
    return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
}
/**
 * Returns the rectangles that the pointer is hovering over
 */ const pointerWithin = (_ref)=>{
    let { droppableContainers, droppableRects, pointerCoordinates } = _ref;
    if (!pointerCoordinates) {
        return [];
    }
    const collisions = [];
    for (const droppableContainer of droppableContainers){
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);
        if (rect && isPointWithinRect(pointerCoordinates, rect)) {
            /* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */ const corners = cornersOfRectangle(rect);
            const distances = corners.reduce((accumulator, corner)=>{
                return accumulator + distanceBetween(pointerCoordinates, corner);
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
        for(var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            adjustments[_key - 1] = arguments[_key];
        }
        return adjustments.reduce((acc, adjustment)=>({
                ...acc,
                top: acc.top + modifier * adjustment.y,
                bottom: acc.bottom + modifier * adjustment.y,
                left: acc.left + modifier * adjustment.x,
                right: acc.right + modifier * adjustment.x
            }), {
            ...rect
        });
    };
}
const getAdjustedRect = /*#__PURE__*/ createRectAdjustmentFn(1);
function parseTransform(transform) {
    if (transform.startsWith('matrix3d(')) {
        const transformArray = transform.slice(9, -1).split(/, /);
        return {
            x: +transformArray[12],
            y: +transformArray[13],
            scaleX: +transformArray[0],
            scaleY: +transformArray[5]
        };
    } else if (transform.startsWith('matrix(')) {
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
    if (!parsedTransform) {
        return rect;
    }
    const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
    const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
    const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(' ') + 1));
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
const defaultOptions = {
    ignoreTransform: false
};
/**
 * Returns the bounding client rect of an element relative to the viewport.
 */ function getClientRect(element, options) {
    if (options === void 0) {
        options = defaultOptions;
    }
    let rect = element.getBoundingClientRect();
    if (options.ignoreTransform) {
        const { transform, transformOrigin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element).getComputedStyle(element);
        if (transform) {
            rect = inverseTransform(rect, transform, transformOrigin);
        }
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
 */ function getTransformAgnosticClientRect(element) {
    return getClientRect(element, {
        ignoreTransform: true
    });
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
    if (computedStyle === void 0) {
        computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(node).getComputedStyle(node);
    }
    return computedStyle.position === 'fixed';
}
function isScrollable(element, computedStyle) {
    if (computedStyle === void 0) {
        computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element).getComputedStyle(element);
    }
    const overflowRegex = /(auto|scroll|overlay)/;
    const properties = [
        'overflow',
        'overflowX',
        'overflowY'
    ];
    return properties.some((property)=>{
        const value = computedStyle[property];
        return typeof value === 'string' ? overflowRegex.test(value) : false;
    });
}
function getScrollableAncestors(element, limit) {
    const scrollParents = [];
    function findScrollableAncestors(node) {
        if (limit != null && scrollParents.length >= limit) {
            return scrollParents;
        }
        if (!node) {
            return scrollParents;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDocument"])(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
            scrollParents.push(node.scrollingElement);
            return scrollParents;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(node) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(node)) {
            return scrollParents;
        }
        if (scrollParents.includes(node)) {
            return scrollParents;
        }
        const computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element).getComputedStyle(node);
        if (node !== element) {
            if (isScrollable(node, computedStyle)) {
                scrollParents.push(node);
            }
        }
        if (isFixed(node, computedStyle)) {
            return scrollParents;
        }
        return findScrollableAncestors(node.parentNode);
    }
    if (!element) {
        return scrollParents;
    }
    return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
    const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
    return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"] || !element) {
        return null;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindow"])(element)) {
        return element;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNode"])(element)) {
        return null;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDocument"])(element) || element === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(element).scrollingElement) {
        return window;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        return element;
    }
    return null;
}
function getScrollXCoordinate(element) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindow"])(element)) {
        return element.scrollX;
    }
    return element.scrollLeft;
}
function getScrollYCoordinate(element) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindow"])(element)) {
        return element.scrollY;
    }
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
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"] || !element) {
        return false;
    }
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
    const isTop = scrollingContainer.scrollTop <= minScroll.y;
    const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
    const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
    const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
    return {
        isTop,
        isLeft,
        isBottom,
        isRight,
        maxScroll,
        minScroll
    };
}
const defaultThreshold = {
    x: 0.2,
    y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
    let { top, left, right, bottom } = _ref;
    if (acceleration === void 0) {
        acceleration = 10;
    }
    if (thresholdPercentage === void 0) {
        thresholdPercentage = defaultThreshold;
    }
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
        // Scroll Up
        direction.y = Direction.Backward;
        speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
    } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
        // Scroll Down
        direction.y = Direction.Forward;
        speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
    }
    if (!isRight && right >= scrollContainerRect.right - threshold.width) {
        // Scroll Right
        direction.x = Direction.Forward;
        speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
    } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
        // Scroll Left
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
    return scrollableAncestors.reduce((acc, node)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(acc, getScrollCoordinates(node));
    }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
    return scrollableAncestors.reduce((acc, node)=>{
        return acc + getScrollXCoordinate(node);
    }, 0);
}
function getScrollYOffset(scrollableAncestors) {
    return scrollableAncestors.reduce((acc, node)=>{
        return acc + getScrollYCoordinate(node);
    }, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
    if (measure === void 0) {
        measure = getClientRect;
    }
    if (!element) {
        return;
    }
    const { top, left, bottom, right } = measure(element);
    const firstScrollableAncestor = getFirstScrollableAncestor(element);
    if (!firstScrollableAncestor) {
        return;
    }
    if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
        element.scrollIntoView({
            block: 'center',
            inline: 'center'
        });
    }
}
const properties = [
    [
        'x',
        [
            'left',
            'right'
        ],
        getScrollXOffset
    ],
    [
        'y',
        [
            'top',
            'bottom'
        ],
        getScrollYOffset
    ]
];
class Rect {
    constructor(rect, element){
        this.rect = void 0;
        this.width = void 0;
        this.height = void 0;
        this.top = void 0;
        this.bottom = void 0;
        this.right = void 0;
        this.left = void 0;
        const scrollableAncestors = getScrollableAncestors(element);
        const scrollOffsets = getScrollOffsets(scrollableAncestors);
        this.rect = {
            ...rect
        };
        this.width = rect.width;
        this.height = rect.height;
        for (const [axis, keys, getScrollOffset] of properties){
            for (const key of keys){
                Object.defineProperty(this, key, {
                    get: ()=>{
                        const currentOffsets = getScrollOffset(scrollableAncestors);
                        const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
                        return this.rect[key] + scrollOffsetsDeltla;
                    },
                    enumerable: true
                });
            }
        }
        Object.defineProperty(this, 'rect', {
            enumerable: false
        });
    }
}
class Listeners {
    constructor(target){
        this.target = void 0;
        this.listeners = [];
        this.removeAll = ()=>{
            this.listeners.forEach((listener)=>{
                var _this$target;
                return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
            });
        };
        this.target = target;
    }
    add(eventName, handler, options) {
        var _this$target2;
        (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
        this.listeners.push([
            eventName,
            handler,
            options
        ]);
    }
}
function getEventListenerTarget(target) {
    // If the `event.target` element is removed from the document events will still be targeted
    // at it, and hence won't always bubble up to the window or document anymore.
    // If there is any risk of an element being removed while it is being dragged,
    // the best practice is to attach the event listeners directly to the target.
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
    const { EventTarget } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(target);
    return target instanceof EventTarget ? target : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(target);
}
function hasExceededDistance(delta, measurement) {
    const dx = Math.abs(delta.x);
    const dy = Math.abs(delta.y);
    if (typeof measurement === 'number') {
        return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
    }
    if ('x' in measurement && 'y' in measurement) {
        return dx > measurement.x && dy > measurement.y;
    }
    if ('x' in measurement) {
        return dx > measurement.x;
    }
    if ('y' in measurement) {
        return dy > measurement.y;
    }
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
const defaultKeyboardCodes = {
    start: [
        KeyboardCode.Space,
        KeyboardCode.Enter
    ],
    cancel: [
        KeyboardCode.Esc
    ],
    end: [
        KeyboardCode.Space,
        KeyboardCode.Enter,
        KeyboardCode.Tab
    ]
};
const defaultKeyboardCoordinateGetter = (event, _ref)=>{
    let { currentCoordinates } = _ref;
    switch(event.code){
        case KeyboardCode.Right:
            return {
                ...currentCoordinates,
                x: currentCoordinates.x + 25
            };
        case KeyboardCode.Left:
            return {
                ...currentCoordinates,
                x: currentCoordinates.x - 25
            };
        case KeyboardCode.Down:
            return {
                ...currentCoordinates,
                y: currentCoordinates.y + 25
            };
        case KeyboardCode.Up:
            return {
                ...currentCoordinates,
                y: currentCoordinates.y - 25
            };
    }
    return undefined;
};
class KeyboardSensor {
    constructor(props){
        this.props = void 0;
        this.autoScrollEnabled = false;
        this.referenceCoordinates = void 0;
        this.listeners = void 0;
        this.windowListeners = void 0;
        this.props = props;
        const { event: { target } } = props;
        this.props = props;
        this.listeners = new Listeners((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(target));
        this.windowListeners = new Listeners((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(target));
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.attach();
    }
    attach() {
        this.handleStart();
        this.windowListeners.add(EventName.Resize, this.handleCancel);
        this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
        setTimeout(()=>this.listeners.add(EventName.Keydown, this.handleKeyDown));
    }
    handleStart() {
        const { activeNode, onStart } = this.props;
        const node = activeNode.node.current;
        if (node) {
            scrollIntoViewIfNeeded(node);
        }
        onStart(defaultCoordinates);
    }
    handleKeyDown(event) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(event)) {
            const { active, context, options } = this.props;
            const { keyboardCodes = defaultKeyboardCodes, coordinateGetter = defaultKeyboardCoordinateGetter, scrollBehavior = 'smooth' } = options;
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
            if (!this.referenceCoordinates) {
                this.referenceCoordinates = currentCoordinates;
            }
            const newCoordinates = coordinateGetter(event, {
                active,
                context: context.current,
                currentCoordinates
            });
            if (newCoordinates) {
                const coordinatesDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(newCoordinates, currentCoordinates);
                const scrollDelta = {
                    x: 0,
                    y: 0
                };
                const { scrollableAncestors } = context.current;
                for (const scrollContainer of scrollableAncestors){
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
                            // We don't need to update coordinates, the scroll adjustment alone will trigger
                            // logic to auto-detect the new container we are over
                            scrollContainer.scrollTo({
                                left: newScrollCoordinates,
                                behavior: scrollBehavior
                            });
                            return;
                        }
                        if (canScrollToNewCoordinates) {
                            scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
                        } else {
                            scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
                        }
                        if (scrollDelta.x) {
                            scrollContainer.scrollBy({
                                left: -scrollDelta.x,
                                behavior: scrollBehavior
                            });
                        }
                        break;
                    } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
                        const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
                        const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
                        if (canScrollToNewCoordinates && !coordinatesDelta.x) {
                            // We don't need to update coordinates, the scroll adjustment alone will trigger
                            // logic to auto-detect the new container we are over
                            scrollContainer.scrollTo({
                                top: newScrollCoordinates,
                                behavior: scrollBehavior
                            });
                            return;
                        }
                        if (canScrollToNewCoordinates) {
                            scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
                        } else {
                            scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
                        }
                        if (scrollDelta.y) {
                            scrollContainer.scrollBy({
                                top: -scrollDelta.y,
                                behavior: scrollBehavior
                            });
                        }
                        break;
                    }
                }
                this.handleMove(event, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(newCoordinates, this.referenceCoordinates), scrollDelta));
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
}
KeyboardSensor.activators = [
    {
        eventName: 'onKeyDown',
        handler: (event, _ref, _ref2)=>{
            let { keyboardCodes = defaultKeyboardCodes, onActivation } = _ref;
            let { active } = _ref2;
            const { code } = event.nativeEvent;
            if (keyboardCodes.start.includes(code)) {
                const activator = active.activatorNode.current;
                if (activator && event.target !== activator) {
                    return false;
                }
                event.preventDefault();
                onActivation == null ? void 0 : onActivation({
                    event: event.nativeEvent
                });
                return true;
            }
            return false;
        }
    }
];
function isDistanceConstraint(constraint) {
    return Boolean(constraint && 'distance' in constraint);
}
function isDelayConstraint(constraint) {
    return Boolean(constraint && 'delay' in constraint);
}
class AbstractPointerSensor {
    constructor(props, events, listenerTarget){
        var _getEventCoordinates;
        if (listenerTarget === void 0) {
            listenerTarget = getEventListenerTarget(props.event.target);
        }
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
        this.document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(target);
        this.documentListeners = new Listeners(this.document);
        this.listeners = new Listeners(listenerTarget);
        this.windowListeners = new Listeners((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(target));
        this.initialCoordinates = (_getEventCoordinates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventCoordinates"])(event)) != null ? _getEventCoordinates : defaultCoordinates;
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
        this.listeners.add(events.move.name, this.handleMove, {
            passive: false
        });
        this.listeners.add(events.end.name, this.handleEnd);
        if (events.cancel) {
            this.listeners.add(events.cancel.name, this.handleCancel);
        }
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
            })) {
                return this.handleStart();
            }
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
        this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
        // This is necessary because we listen for `click` and `selection` events on the document
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
            this.activated = true; // Stop propagation of click events once activation constraints are met
            this.documentListeners.add(EventName.Click, stopPropagation, {
                capture: true
            }); // Remove any text selection from the document
            this.removeTextSelection(); // Prevent further text selection while dragging
            this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
            onStart(initialCoordinates);
        }
    }
    handleMove(event) {
        var _getEventCoordinates2;
        const { activated, initialCoordinates, props } = this;
        const { onMove, options: { activationConstraint } } = props;
        if (!initialCoordinates) {
            return;
        }
        const coordinates = (_getEventCoordinates2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventCoordinates"])(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
        const delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(initialCoordinates, coordinates); // Constraint validation
        if (!activated && activationConstraint) {
            if (isDistanceConstraint(activationConstraint)) {
                if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
                    return this.handleCancel();
                }
                if (hasExceededDistance(delta, activationConstraint.distance)) {
                    return this.handleStart();
                }
            }
            if (isDelayConstraint(activationConstraint)) {
                if (hasExceededDistance(delta, activationConstraint.tolerance)) {
                    return this.handleCancel();
                }
            }
            this.handlePending(activationConstraint, delta);
            return;
        }
        if (event.cancelable) {
            event.preventDefault();
        }
        onMove(coordinates);
    }
    handleEnd() {
        const { onAbort, onEnd } = this.props;
        this.detach();
        if (!this.activated) {
            onAbort(this.props.active);
        }
        onEnd();
    }
    handleCancel() {
        const { onAbort, onCancel } = this.props;
        this.detach();
        if (!this.activated) {
            onAbort(this.props.active);
        }
        onCancel();
    }
    handleKeydown(event) {
        if (event.code === KeyboardCode.Esc) {
            this.handleCancel();
        }
    }
    removeTextSelection() {
        var _this$document$getSel;
        (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
    }
}
const events = {
    cancel: {
        name: 'pointercancel'
    },
    move: {
        name: 'pointermove'
    },
    end: {
        name: 'pointerup'
    }
};
class PointerSensor extends AbstractPointerSensor {
    constructor(props){
        const { event } = props; // Pointer events stop firing if the target is unmounted while dragging
        // Therefore we attach listeners to the owner document instead
        const listenerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(event.target);
        super(props, events, listenerTarget);
    }
}
PointerSensor.activators = [
    {
        eventName: 'onPointerDown',
        handler: (_ref, _ref2)=>{
            let { nativeEvent: event } = _ref;
            let { onActivation } = _ref2;
            if (!event.isPrimary || event.button !== 0) {
                return false;
            }
            onActivation == null ? void 0 : onActivation({
                event
            });
            return true;
        }
    }
];
const events$1 = {
    move: {
        name: 'mousemove'
    },
    end: {
        name: 'mouseup'
    }
};
var MouseButton;
(function(MouseButton) {
    MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
class MouseSensor extends AbstractPointerSensor {
    constructor(props){
        super(props, events$1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(props.event.target));
    }
}
MouseSensor.activators = [
    {
        eventName: 'onMouseDown',
        handler: (_ref, _ref2)=>{
            let { nativeEvent: event } = _ref;
            let { onActivation } = _ref2;
            if (event.button === MouseButton.RightClick) {
                return false;
            }
            onActivation == null ? void 0 : onActivation({
                event
            });
            return true;
        }
    }
];
const events$2 = {
    cancel: {
        name: 'touchcancel'
    },
    move: {
        name: 'touchmove'
    },
    end: {
        name: 'touchend'
    }
};
class TouchSensor extends AbstractPointerSensor {
    constructor(props){
        super(props, events$2);
    }
    static setup() {
        // Adding a non-capture and non-passive `touchmove` listener in order
        // to force `event.preventDefault()` calls to work in dynamically added
        // touchmove event handlers. This is required for iOS Safari.
        window.addEventListener(events$2.move.name, noop, {
            capture: false,
            passive: false
        });
        return function teardown() {
            window.removeEventListener(events$2.move.name, noop);
        }; // We create a new handler because the teardown function of another sensor
        "TURBOPACK unreachable";
        // could remove our event listener if we use a referentially equal listener.
        function noop() {}
    }
}
TouchSensor.activators = [
    {
        eventName: 'onTouchStart',
        handler: (_ref, _ref2)=>{
            let { nativeEvent: event } = _ref;
            let { onActivation } = _ref2;
            const { touches } = event;
            if (touches.length > 1) {
                return false;
            }
            onActivation == null ? void 0 : onActivation({
                event
            });
            return true;
        }
    }
];
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
    const [setAutoScrollInterval, clearAutoScrollInterval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterval"])();
    const scrollSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const scrollDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAutoScroller.useMemo[rect]": ()=>{
            switch(activator){
                case AutoScrollActivator.Pointer:
                    return pointerCoordinates ? {
                        top: pointerCoordinates.y,
                        bottom: pointerCoordinates.y,
                        left: pointerCoordinates.x,
                        right: pointerCoordinates.x
                    } : null;
                case AutoScrollActivator.DraggableRect:
                    return draggingRect;
            }
        }
    }["useAutoScroller.useMemo[rect]"], [
        activator,
        draggingRect,
        pointerCoordinates
    ]);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAutoScroller.useCallback[autoScroll]": ()=>{
            const scrollContainer = scrollContainerRef.current;
            if (!scrollContainer) {
                return;
            }
            const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
            const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
            scrollContainer.scrollBy(scrollLeft, scrollTop);
        }
    }["useAutoScroller.useCallback[autoScroll]"], []);
    const sortedScrollableAncestors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAutoScroller.useMemo[sortedScrollableAncestors]": ()=>order === TraversalOrder.TreeOrder ? [
                ...scrollableAncestors
            ].reverse() : scrollableAncestors
    }["useAutoScroller.useMemo[sortedScrollableAncestors]"], [
        order,
        scrollableAncestors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoScroller.useEffect": ()=>{
            if (!enabled || !scrollableAncestors.length || !rect) {
                clearAutoScrollInterval();
                return;
            }
            for (const scrollContainer of sortedScrollableAncestors){
                if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
                    continue;
                }
                const index = scrollableAncestors.indexOf(scrollContainer);
                const scrollContainerRect = scrollableAncestorRects[index];
                if (!scrollContainerRect) {
                    continue;
                }
                const { direction, speed } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
                for (const axis of [
                    'x',
                    'y'
                ]){
                    if (!scrollIntent[axis][direction[axis]]) {
                        speed[axis] = 0;
                        direction[axis] = 0;
                    }
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
        }
    }["useAutoScroller.useEffect"], [
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
const defaultScrollIntent = {
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
    const previousDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(delta);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useScrollIntent.useLazyMemo": (previousIntent)=>{
            if (disabled || !previousDelta || !previousIntent) {
                // Reset scroll intent tracking when auto-scrolling is disabled
                return defaultScrollIntent;
            }
            const direction = {
                x: Math.sign(delta.x - previousDelta.x),
                y: Math.sign(delta.y - previousDelta.y)
            }; // Keep track of the user intent to scroll in each direction for both axis
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
        }
    }["useScrollIntent.useLazyMemo"], [
        disabled,
        delta,
        previousDelta
    ]);
}
function useCachedNode(draggableNodes, id) {
    const draggableNode = id != null ? draggableNodes.get(id) : undefined;
    const node = draggableNode ? draggableNode.node.current : null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useCachedNode.useLazyMemo": (cachedNode)=>{
            var _ref;
            if (id == null) {
                return null;
            } // In some cases, the draggable node can unmount while dragging
            // This is the case for virtualized lists. In those situations,
            // we fall back to the last known value for that node.
            return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
        }
    }["useCachedNode.useLazyMemo"], [
        node,
        id
    ]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCombineActivators.useMemo": ()=>sensors.reduce({
                "useCombineActivators.useMemo": (accumulator, sensor)=>{
                    const { sensor: Sensor } = sensor;
                    const sensorActivators = Sensor.activators.map({
                        "useCombineActivators.useMemo.sensorActivators": (activator)=>({
                                eventName: activator.eventName,
                                handler: getSyntheticHandler(activator.handler, sensor)
                            })
                    }["useCombineActivators.useMemo.sensorActivators"]);
                    return [
                        ...accumulator,
                        ...sensorActivators
                    ];
                }
            }["useCombineActivators.useMemo"], [])
    }["useCombineActivators.useMemo"], [
        sensors,
        getSyntheticHandler
    ]);
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
const defaultValue = /*#__PURE__*/ new Map();
function useDroppableMeasuring(containers, _ref) {
    let { dragging, dependencies, config } = _ref;
    const [queue, setQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { frequency, measure, strategy } = config;
    const containersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(containers);
    const disabled = isDisabled();
    const disabledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(disabled);
    const measureDroppableContainers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDroppableMeasuring.useCallback[measureDroppableContainers]": function(ids) {
            if (ids === void 0) {
                ids = [];
            }
            if (disabledRef.current) {
                return;
            }
            setQueue({
                "useDroppableMeasuring.useCallback[measureDroppableContainers]": (value)=>{
                    if (value === null) {
                        return ids;
                    }
                    return value.concat(ids.filter({
                        "useDroppableMeasuring.useCallback[measureDroppableContainers]": (id)=>!value.includes(id)
                    }["useDroppableMeasuring.useCallback[measureDroppableContainers]"]));
                }
            }["useDroppableMeasuring.useCallback[measureDroppableContainers]"]);
        }
    }["useDroppableMeasuring.useCallback[measureDroppableContainers]"], [
        disabledRef
    ]);
    const timeoutId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const droppableRects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useDroppableMeasuring.useLazyMemo[droppableRects]": (previousValue)=>{
            if (disabled && !dragging) {
                return defaultValue;
            }
            if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
                const map = new Map();
                for (let container of containers){
                    if (!container) {
                        continue;
                    }
                    if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
                        // This container does not need to be re-measured
                        map.set(container.id, container.rect.current);
                        continue;
                    }
                    const node = container.node.current;
                    const rect = node ? new Rect(measure(node), node) : null;
                    container.rect.current = rect;
                    if (rect) {
                        map.set(container.id, rect);
                    }
                }
                return map;
            }
            return previousValue;
        }
    }["useDroppableMeasuring.useLazyMemo[droppableRects]"], [
        containers,
        queue,
        dragging,
        disabled,
        measure
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppableMeasuring.useEffect": ()=>{
            containersRef.current = containers;
        }
    }["useDroppableMeasuring.useEffect"], [
        containers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppableMeasuring.useEffect": ()=>{
            if (disabled) {
                return;
            }
            measureDroppableContainers();
        }
    }["useDroppableMeasuring.useEffect"], [
        dragging,
        disabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppableMeasuring.useEffect": ()=>{
            if (queue && queue.length > 0) {
                setQueue(null);
            }
        }
    }["useDroppableMeasuring.useEffect"], [
        JSON.stringify(queue)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppableMeasuring.useEffect": ()=>{
            if (disabled || typeof frequency !== 'number' || timeoutId.current !== null) {
                return;
            }
            timeoutId.current = setTimeout({
                "useDroppableMeasuring.useEffect": ()=>{
                    measureDroppableContainers();
                    timeoutId.current = null;
                }
            }["useDroppableMeasuring.useEffect"], frequency);
        }
    }["useDroppableMeasuring.useEffect"], [
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
    "TURBOPACK unreachable";
    function isDisabled() {
        switch(strategy){
            case MeasuringStrategy.Always:
                return false;
            case MeasuringStrategy.BeforeDragging:
                return dragging;
            default:
                return !dragging;
        }
    }
}
function useInitialValue(value, computeFn) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useInitialValue.useLazyMemo": (previousValue)=>{
            if (!value) {
                return null;
            }
            if (previousValue) {
                return previousValue;
            }
            return typeof computeFn === 'function' ? computeFn(value) : value;
        }
    }["useInitialValue.useLazyMemo"], [
        computeFn,
        value
    ]);
}
function useInitialRect(node, measure) {
    return useInitialValue(node, measure);
}
/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */ function useMutationObserver(_ref) {
    let { callback, disabled } = _ref;
    const handleMutations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(callback);
    const mutationObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMutationObserver.useMemo[mutationObserver]": ()=>{
            if (disabled || typeof window === 'undefined' || typeof window.MutationObserver === 'undefined') {
                return undefined;
            }
            const { MutationObserver } = window;
            return new MutationObserver(handleMutations);
        }
    }["useMutationObserver.useMemo[mutationObserver]"], [
        handleMutations,
        disabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMutationObserver.useEffect": ()=>{
            return ({
                "useMutationObserver.useEffect": ()=>mutationObserver == null ? void 0 : mutationObserver.disconnect()
            })["useMutationObserver.useEffect"];
        }
    }["useMutationObserver.useEffect"], [
        mutationObserver
    ]);
    return mutationObserver;
}
/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */ function useResizeObserver(_ref) {
    let { callback, disabled } = _ref;
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(callback);
    const resizeObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useResizeObserver.useMemo[resizeObserver]": ()=>{
            if (disabled || typeof window === 'undefined' || typeof window.ResizeObserver === 'undefined') {
                return undefined;
            }
            const { ResizeObserver } = window;
            return new ResizeObserver(handleResize);
        }
    }["useResizeObserver.useMemo[resizeObserver]"], [
        disabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            return ({
                "useResizeObserver.useEffect": ()=>resizeObserver == null ? void 0 : resizeObserver.disconnect()
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        resizeObserver
    ]);
    return resizeObserver;
}
function defaultMeasure(element) {
    return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
    if (measure === void 0) {
        measure = defaultMeasure;
    }
    const [rect, setRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function measureRect() {
        setRect((currentRect)=>{
            if (!element) {
                return null;
            }
            if (element.isConnected === false) {
                var _ref;
                // Fall back to last rect we measured if the element is
                // no longer connected to the DOM.
                return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
            }
            const newRect = measure(element);
            if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
                return currentRect;
            }
            return newRect;
        });
    }
    const mutationObserver = useMutationObserver({
        callback (records) {
            if (!element) {
                return;
            }
            for (const record of records){
                const { type, target } = record;
                if (type === 'childList' && target instanceof HTMLElement && target.contains(element)) {
                    measureRect();
                    break;
                }
            }
        }
    });
    const resizeObserver = useResizeObserver({
        callback: measureRect
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useRect.useIsomorphicLayoutEffect": ()=>{
            measureRect();
            if (element) {
                resizeObserver == null ? void 0 : resizeObserver.observe(element);
                mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            } else {
                resizeObserver == null ? void 0 : resizeObserver.disconnect();
                mutationObserver == null ? void 0 : mutationObserver.disconnect();
            }
        }
    }["useRect.useIsomorphicLayoutEffect"], [
        element
    ]);
    return rect;
}
function useRectDelta(rect) {
    const initialRect = useInitialValue(rect);
    return getRectDelta(rect, initialRect);
}
const defaultValue$1 = [];
function useScrollableAncestors(node) {
    const previousNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(node);
    const ancestors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyMemo"])({
        "useScrollableAncestors.useLazyMemo[ancestors]": (previousValue)=>{
            if (!node) {
                return defaultValue$1;
            }
            if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
                return previousValue;
            }
            return getScrollableAncestors(node);
        }
    }["useScrollableAncestors.useLazyMemo[ancestors]"], [
        node
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollableAncestors.useEffect": ()=>{
            previousNode.current = node;
        }
    }["useScrollableAncestors.useEffect"], [
        node
    ]);
    return ancestors;
}
function useScrollOffsets(elements) {
    const [scrollCoordinates, setScrollCoordinates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const prevElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(elements); // To-do: Throttle the handleScroll callback
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollOffsets.useCallback[handleScroll]": (event)=>{
            const scrollingElement = getScrollableElement(event.target);
            if (!scrollingElement) {
                return;
            }
            setScrollCoordinates({
                "useScrollOffsets.useCallback[handleScroll]": (scrollCoordinates)=>{
                    if (!scrollCoordinates) {
                        return null;
                    }
                    scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
                    return new Map(scrollCoordinates);
                }
            }["useScrollOffsets.useCallback[handleScroll]"]);
        }
    }["useScrollOffsets.useCallback[handleScroll]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollOffsets.useEffect": ()=>{
            const previousElements = prevElements.current;
            if (elements !== previousElements) {
                cleanup(previousElements);
                const entries = elements.map({
                    "useScrollOffsets.useEffect.entries": (element)=>{
                        const scrollableElement = getScrollableElement(element);
                        if (scrollableElement) {
                            scrollableElement.addEventListener('scroll', handleScroll, {
                                passive: true
                            });
                            return [
                                scrollableElement,
                                getScrollCoordinates(scrollableElement)
                            ];
                        }
                        return null;
                    }
                }["useScrollOffsets.useEffect.entries"]).filter({
                    "useScrollOffsets.useEffect.entries": (entry)=>entry != null
                }["useScrollOffsets.useEffect.entries"]);
                setScrollCoordinates(entries.length ? new Map(entries) : null);
                prevElements.current = elements;
            }
            return ({
                "useScrollOffsets.useEffect": ()=>{
                    cleanup(elements);
                    cleanup(previousElements);
                }
            })["useScrollOffsets.useEffect"];
            "TURBOPACK unreachable";
            function cleanup(elements) {
                elements.forEach({
                    "useScrollOffsets.useEffect.cleanup": (element)=>{
                        const scrollableElement = getScrollableElement(element);
                        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
                    }
                }["useScrollOffsets.useEffect.cleanup"]);
            }
        }
    }["useScrollOffsets.useEffect"], [
        handleScroll,
        elements
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useScrollOffsets.useMemo": ()=>{
            if (elements.length) {
                return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce({
                    "useScrollOffsets.useMemo": (acc, coordinates)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(acc, coordinates)
                }["useScrollOffsets.useMemo"], defaultCoordinates) : getScrollOffsets(elements);
            }
            return defaultCoordinates;
        }
    }["useScrollOffsets.useMemo"], [
        elements,
        scrollCoordinates
    ]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
    if (dependencies === void 0) {
        dependencies = [];
    }
    const initialScrollOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollOffsetsDelta.useEffect": ()=>{
            initialScrollOffsets.current = null;
        }
    }["useScrollOffsetsDelta.useEffect"], dependencies);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollOffsetsDelta.useEffect": ()=>{
            const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
            if (hasScrollOffsets && !initialScrollOffsets.current) {
                initialScrollOffsets.current = scrollOffsets;
            }
            if (!hasScrollOffsets && initialScrollOffsets.current) {
                initialScrollOffsets.current = null;
            }
        }
    }["useScrollOffsetsDelta.useEffect"], [
        scrollOffsets
    ]);
    return initialScrollOffsets.current ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtract"])(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSensorSetup.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"]) {
                return;
            }
            const teardownFns = sensors.map({
                "useSensorSetup.useEffect.teardownFns": (_ref)=>{
                    let { sensor } = _ref;
                    return sensor.setup == null ? void 0 : sensor.setup();
                }
            }["useSensorSetup.useEffect.teardownFns"]);
            return ({
                "useSensorSetup.useEffect": ()=>{
                    for (const teardown of teardownFns){
                        teardown == null ? void 0 : teardown();
                    }
                }
            })["useSensorSetup.useEffect"];
        }
    }["useSensorSetup.useEffect"], // eslint-disable-next-line react-hooks/exhaustive-deps
    sensors.map({
        "useSensorSetup.useEffect": (_ref2)=>{
            let { sensor } = _ref2;
            return sensor;
        }
    }["useSensorSetup.useEffect"]));
}
function useSyntheticListeners(listeners, id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSyntheticListeners.useMemo": ()=>{
            return listeners.reduce({
                "useSyntheticListeners.useMemo": (acc, _ref)=>{
                    let { eventName, handler } = _ref;
                    acc[eventName] = ({
                        "useSyntheticListeners.useMemo": (event)=>{
                            handler(event, id);
                        }
                    })["useSyntheticListeners.useMemo"];
                    return acc;
                }
            }["useSyntheticListeners.useMemo"], {});
        }
    }["useSyntheticListeners.useMemo"], [
        listeners,
        id
    ]);
}
function useWindowRect(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWindowRect.useMemo": ()=>element ? getWindowClientRect(element) : null
    }["useWindowRect.useMemo"], [
        element
    ]);
}
const defaultValue$2 = [];
function useRects(elements, measure) {
    if (measure === void 0) {
        measure = getClientRect;
    }
    const [firstElement] = elements;
    const windowRect = useWindowRect(firstElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(firstElement) : null);
    const [rects, setRects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue$2);
    function measureRects() {
        setRects(()=>{
            if (!elements.length) {
                return defaultValue$2;
            }
            return elements.map((element)=>isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
        });
    }
    const resizeObserver = useResizeObserver({
        callback: measureRects
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useRects.useIsomorphicLayoutEffect": ()=>{
            resizeObserver == null ? void 0 : resizeObserver.disconnect();
            measureRects();
            elements.forEach({
                "useRects.useIsomorphicLayoutEffect": (element)=>resizeObserver == null ? void 0 : resizeObserver.observe(element)
            }["useRects.useIsomorphicLayoutEffect"]);
        }
    }["useRects.useIsomorphicLayoutEffect"], [
        elements
    ]);
    return rects;
}
function getMeasurableNode(node) {
    if (!node) {
        return null;
    }
    if (node.children.length > 1) {
        return node;
    }
    const firstChild = node.children[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
    let { measure } = _ref;
    const [rect, setRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragOverlayMeasuring.useCallback[handleResize]": (entries)=>{
            for (const { target } of entries){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(target)) {
                    setRect({
                        "useDragOverlayMeasuring.useCallback[handleResize]": (rect)=>{
                            const newRect = measure(target);
                            return rect ? {
                                ...rect,
                                width: newRect.width,
                                height: newRect.height
                            } : newRect;
                        }
                    }["useDragOverlayMeasuring.useCallback[handleResize]"]);
                    break;
                }
            }
        }
    }["useDragOverlayMeasuring.useCallback[handleResize]"], [
        measure
    ]);
    const resizeObserver = useResizeObserver({
        callback: handleResize
    });
    const handleNodeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragOverlayMeasuring.useCallback[handleNodeChange]": (element)=>{
            const node = getMeasurableNode(element);
            resizeObserver == null ? void 0 : resizeObserver.disconnect();
            if (node) {
                resizeObserver == null ? void 0 : resizeObserver.observe(node);
            }
            setRect(node ? measure(node) : null);
        }
    }["useDragOverlayMeasuring.useCallback[handleNodeChange]"], [
        measure,
        resizeObserver
    ]);
    const [nodeRef, setRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeRef"])(handleNodeChange);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragOverlayMeasuring.useMemo": ()=>({
                nodeRef,
                rect,
                setRef
            })
    }["useDragOverlayMeasuring.useMemo"], [
        rect,
        nodeRef,
        setRef
    ]);
}
const defaultSensors = [
    {
        sensor: PointerSensor,
        options: {}
    },
    {
        sensor: KeyboardSensor,
        options: {}
    }
];
const defaultData = {
    current: {}
};
const defaultMeasuringConfiguration = {
    draggable: {
        measure: getTransformAgnosticClientRect
    },
    droppable: {
        measure: getTransformAgnosticClientRect,
        strategy: MeasuringStrategy.WhileDragging,
        frequency: MeasuringFrequency.Optimized
    },
    dragOverlay: {
        measure: getClientRect
    }
};
class DroppableContainersMap extends Map {
    get(id) {
        var _super$get;
        return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
    }
    toArray() {
        return Array.from(this.values());
    }
    getEnabled() {
        return this.toArray().filter((_ref)=>{
            let { disabled } = _ref;
            return !disabled;
        });
    }
    getNodeFor(id) {
        var _this$get$node$curren, _this$get;
        return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
    }
}
const defaultPublicContext = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: /*#__PURE__*/ new Map(),
    droppableRects: /*#__PURE__*/ new Map(),
    droppableContainers: /*#__PURE__*/ new DroppableContainersMap(),
    over: null,
    dragOverlay: {
        nodeRef: {
            current: null
        },
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
const defaultInternalContext = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: {
        draggable: ''
    },
    dispatch: noop,
    draggableNodes: /*#__PURE__*/ new Map(),
    over: null,
    measureDroppableContainers: noop
};
const InternalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultInternalContext);
const PublicContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultPublicContext);
function getInitialState() {
    return {
        draggable: {
            active: null,
            initialCoordinates: {
                x: 0,
                y: 0
            },
            nodes: new Map(),
            translate: {
                x: 0,
                y: 0
            }
        },
        droppable: {
            containers: new DroppableContainersMap()
        }
    };
}
function reducer(state, action) {
    switch(action.type){
        case Action.DragStart:
            return {
                ...state,
                draggable: {
                    ...state.draggable,
                    initialCoordinates: action.initialCoordinates,
                    active: action.active
                }
            };
        case Action.DragMove:
            if (state.draggable.active == null) {
                return state;
            }
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
        case Action.DragCancel:
            return {
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
        case Action.RegisterDroppable:
            {
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
        case Action.SetDroppableDisabled:
            {
                const { id, key, disabled } = action;
                const element = state.droppable.containers.get(id);
                if (!element || key !== element.key) {
                    return state;
                }
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
        case Action.UnregisterDroppable:
            {
                const { id, key } = action;
                const element = state.droppable.containers.get(id);
                if (!element || key !== element.key) {
                    return state;
                }
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
        default:
            {
                return state;
            }
    }
}
function RestoreFocus(_ref) {
    let { disabled } = _ref;
    const { active, activatorEvent, draggableNodes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InternalContext);
    const previousActivatorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(activatorEvent);
    const previousActiveId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(active == null ? void 0 : active.id); // Restore keyboard focus on the activator node
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RestoreFocus.useEffect": ()=>{
            if (disabled) {
                return;
            }
            if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(previousActivatorEvent)) {
                    return;
                }
                if (document.activeElement === previousActivatorEvent.target) {
                    // No need to restore focus
                    return;
                }
                const draggableNode = draggableNodes.get(previousActiveId);
                if (!draggableNode) {
                    return;
                }
                const { activatorNode, node } = draggableNode;
                if (!activatorNode.current && !node.current) {
                    return;
                }
                requestAnimationFrame({
                    "RestoreFocus.useEffect": ()=>{
                        for (const element of [
                            activatorNode.current,
                            node.current
                        ]){
                            if (!element) {
                                continue;
                            }
                            const focusableNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findFirstFocusableNode"])(element);
                            if (focusableNode) {
                                focusableNode.focus();
                                break;
                            }
                        }
                    }
                }["RestoreFocus.useEffect"]);
            }
        }
    }["RestoreFocus.useEffect"], [
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
    return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier)=>{
        return modifier({
            transform: accumulator,
            ...args
        });
    }, transform) : transform;
}
function useMeasuringConfiguration(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMeasuringConfiguration.useMemo": ()=>({
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
            })
    }["useMeasuringConfiguration.useMemo"], [
        config == null ? void 0 : config.draggable,
        config == null ? void 0 : config.droppable,
        config == null ? void 0 : config.dragOverlay
    ]);
}
function useLayoutShiftScrollCompensation(_ref) {
    let { activeNode, measure, initialRect, config = true } = _ref;
    const initialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { x, y } = typeof config === 'boolean' ? {
        x: config,
        y: config
    } : config;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useLayoutShiftScrollCompensation.useIsomorphicLayoutEffect": ()=>{
            const disabled = !x && !y;
            if (disabled || !activeNode) {
                initialized.current = false;
                return;
            }
            if (initialized.current || !initialRect) {
                // Return early if layout shift scroll compensation was already attempted
                // or if there is no initialRect to compare to.
                return;
            } // Get the most up to date node ref for the active draggable
            const node = activeNode == null ? void 0 : activeNode.node.current;
            if (!node || node.isConnected === false) {
                // Return early if there is no attached node ref or if the node is
                // disconnected from the document.
                return;
            }
            const rect = measure(node);
            const rectDelta = getRectDelta(rect, initialRect);
            if (!x) {
                rectDelta.x = 0;
            }
            if (!y) {
                rectDelta.y = 0;
            } // Only perform layout shift scroll compensation once
            initialized.current = true;
            if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
                const firstScrollableAncestor = getFirstScrollableAncestor(node);
                if (firstScrollableAncestor) {
                    firstScrollableAncestor.scrollBy({
                        top: rectDelta.y,
                        left: rectDelta.x
                    });
                }
            }
        }
    }["useLayoutShiftScrollCompensation.useIsomorphicLayoutEffect"], [
        activeNode,
        x,
        y,
        initialRect,
        measure
    ]);
}
const ActiveDraggableContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
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
const DndContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function DndContext(_ref) {
    var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
    let { id, accessibility, autoScroll = true, children, sensors = defaultSensors, collisionDetection = rectIntersection, measuring, modifiers, ...props } = _ref;
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, undefined, getInitialState);
    const [state, dispatch] = store;
    const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Status.Uninitialized);
    const isInitialized = status === Status.Initialized;
    const { draggable: { active: activeId, nodes: draggableNodes, translate }, droppable: { containers: droppableContainers } } = state;
    const node = activeId != null ? draggableNodes.get(activeId) : null;
    const activeRects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        initial: null,
        translated: null
    });
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[active]": ()=>{
            var _node$data;
            return activeId != null ? {
                id: activeId,
                // It's possible for the active node to unmount while dragging
                data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
                rect: activeRects
            } : null;
        }
    }["DndContext.DndContext.useMemo[active]"], [
        activeId,
        node
    ]);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeSensor, setActiveSensor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activatorEvent, setActivatorEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const latestProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(props, Object.values(props));
    const draggableDescribedById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])("DndDescribedBy", id);
    const enabledDroppableContainers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[enabledDroppableContainers]": ()=>droppableContainers.getEnabled()
    }["DndContext.DndContext.useMemo[enabledDroppableContainers]"], [
        droppableContainers
    ]);
    const measuringConfiguration = useMeasuringConfiguration(measuring);
    const { droppableRects, measureDroppableContainers, measuringScheduled } = useDroppableMeasuring(enabledDroppableContainers, {
        dragging: isInitialized,
        dependencies: [
            translate.x,
            translate.y
        ],
        config: measuringConfiguration.droppable
    });
    const activeNode = useCachedNode(draggableNodes, activeId);
    const activationCoordinates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[activationCoordinates]": ()=>activatorEvent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventCoordinates"])(activatorEvent) : null
    }["DndContext.DndContext.useMemo[activationCoordinates]"], [
        activatorEvent
    ]);
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
    const sensorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
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
    const dragOverlay = useDragOverlayMeasuring({
        measure: measuringConfiguration.dragOverlay.measure
    }); // Use the rect of the drag overlay if it is mounted
    const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
    const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
    const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect); // The delta between the previous and new position of the draggable node
    // is only relevant when there is no drag overlay
    const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect); // Get the window rect of the dragging node
    const windowRect = useWindowRect(draggingNode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(draggingNode) : null); // Get scrollable ancestors of the dragging node
    const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
    const scrollableAncestorRects = useRects(scrollableAncestors); // Apply modifiers
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
    const pointerCoordinates = activationCoordinates ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(activationCoordinates, translate) : null;
    const scrollOffsets = useScrollOffsets(scrollableAncestors); // Represents the scroll delta since dragging was initiated
    const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets); // Represents the scroll delta since the last time the active node rect was measured
    const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [
        activeNodeRect
    ]);
    const scrollAdjustedTranslate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(modifiedTranslate, scrollAdjustment);
    const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
    const collisions = active && collisionRect ? collisionDetection({
        active,
        collisionRect,
        droppableRects,
        droppableContainers: enabledDroppableContainers,
        pointerCoordinates
    }) : null;
    const overId = getFirstCollision(collisions, 'id');
    const [over, setOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // When there is no drag overlay used, we need to account for the
    // window scroll delta
    const appliedTranslate = usesDragOverlay ? modifiedTranslate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(modifiedTranslate, activeNodeScrollDelta);
    const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
    const activeSensorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const instantiateSensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DndContext.DndContext.useCallback[instantiateSensor]": (event, _ref2)=>{
            let { sensor: Sensor, options } = _ref2;
            if (activeRef.current == null) {
                return;
            }
            const activeNode = draggableNodes.get(activeRef.current);
            if (!activeNode) {
                return;
            }
            const activatorEvent = event.nativeEvent;
            const sensorInstance = new Sensor({
                active: activeRef.current,
                activeNode,
                event: activatorEvent,
                options,
                // Sensors need to be instantiated with refs for arguments that change over time
                // otherwise they are frozen in time with the stale arguments
                context: sensorContext,
                onAbort (id) {
                    const draggableNode = draggableNodes.get(id);
                    if (!draggableNode) {
                        return;
                    }
                    const { onDragAbort } = latestProps.current;
                    const event = {
                        id
                    };
                    onDragAbort == null ? void 0 : onDragAbort(event);
                    dispatchMonitorEvent({
                        type: 'onDragAbort',
                        event
                    });
                },
                onPending (id, constraint, initialCoordinates, offset) {
                    const draggableNode = draggableNodes.get(id);
                    if (!draggableNode) {
                        return;
                    }
                    const { onDragPending } = latestProps.current;
                    const event = {
                        id,
                        constraint,
                        initialCoordinates,
                        offset
                    };
                    onDragPending == null ? void 0 : onDragPending(event);
                    dispatchMonitorEvent({
                        type: 'onDragPending',
                        event
                    });
                },
                onStart (initialCoordinates) {
                    const id = activeRef.current;
                    if (id == null) {
                        return;
                    }
                    const draggableNode = draggableNodes.get(id);
                    if (!draggableNode) {
                        return;
                    }
                    const { onDragStart } = latestProps.current;
                    const event = {
                        activatorEvent,
                        active: {
                            id,
                            data: draggableNode.data,
                            rect: activeRects
                        }
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])({
                        "DndContext.DndContext.useCallback[instantiateSensor]": ()=>{
                            onDragStart == null ? void 0 : onDragStart(event);
                            setStatus(Status.Initializing);
                            dispatch({
                                type: Action.DragStart,
                                initialCoordinates,
                                active: id
                            });
                            dispatchMonitorEvent({
                                type: 'onDragStart',
                                event
                            });
                            setActiveSensor(activeSensorRef.current);
                            setActivatorEvent(activatorEvent);
                        }
                    }["DndContext.DndContext.useCallback[instantiateSensor]"]);
                },
                onMove (coordinates) {
                    dispatch({
                        type: Action.DragMove,
                        coordinates
                    });
                },
                onEnd: createHandler(Action.DragEnd),
                onCancel: createHandler(Action.DragCancel)
            });
            activeSensorRef.current = sensorInstance;
            function createHandler(type) {
                return async function handler() {
                    const { active, collisions, over, scrollAdjustedTranslate } = sensorContext.current;
                    let event = null;
                    if (active && scrollAdjustedTranslate) {
                        const { cancelDrop } = latestProps.current;
                        event = {
                            activatorEvent,
                            active: active,
                            collisions,
                            delta: scrollAdjustedTranslate,
                            over
                        };
                        if (type === Action.DragEnd && typeof cancelDrop === 'function') {
                            const shouldCancel = await Promise.resolve(cancelDrop(event));
                            if (shouldCancel) {
                                type = Action.DragCancel;
                            }
                        }
                    }
                    activeRef.current = null;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])({
                        "DndContext.DndContext.useCallback[instantiateSensor].createHandler.handler": ()=>{
                            dispatch({
                                type
                            });
                            setStatus(Status.Uninitialized);
                            setOver(null);
                            setActiveSensor(null);
                            setActivatorEvent(null);
                            activeSensorRef.current = null;
                            const eventName = type === Action.DragEnd ? 'onDragEnd' : 'onDragCancel';
                            if (event) {
                                const handler = latestProps.current[eventName];
                                handler == null ? void 0 : handler(event);
                                dispatchMonitorEvent({
                                    type: eventName,
                                    event
                                });
                            }
                        }
                    }["DndContext.DndContext.useCallback[instantiateSensor].createHandler.handler"]);
                };
            }
        }
    }["DndContext.DndContext.useCallback[instantiateSensor]"], [
        draggableNodes
    ]);
    const bindActivatorToSensorInstantiator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DndContext.DndContext.useCallback[bindActivatorToSensorInstantiator]": (handler, sensor)=>{
            return ({
                "DndContext.DndContext.useCallback[bindActivatorToSensorInstantiator]": (event, active)=>{
                    const nativeEvent = event.nativeEvent;
                    const activeDraggableNode = draggableNodes.get(active);
                    if (activeRef.current !== null || // No active draggable
                    !activeDraggableNode || // Event has already been captured
                    nativeEvent.dndKit || nativeEvent.defaultPrevented) {
                        return;
                    }
                    const activationContext = {
                        active: activeDraggableNode
                    };
                    const shouldActivate = handler(event, sensor.options, activationContext);
                    if (shouldActivate === true) {
                        nativeEvent.dndKit = {
                            capturedBy: sensor.sensor
                        };
                        activeRef.current = active;
                        instantiateSensor(event, sensor);
                    }
                }
            })["DndContext.DndContext.useCallback[bindActivatorToSensorInstantiator]"];
        }
    }["DndContext.DndContext.useCallback[bindActivatorToSensorInstantiator]"], [
        draggableNodes,
        instantiateSensor
    ]);
    const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
    useSensorSetup(sensors);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "DndContext.DndContext.useIsomorphicLayoutEffect": ()=>{
            if (activeNodeRect && status === Status.Initializing) {
                setStatus(Status.Initialized);
            }
        }
    }["DndContext.DndContext.useIsomorphicLayoutEffect"], [
        activeNodeRect,
        status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DndContext.DndContext.useEffect": ()=>{
            const { onDragMove } = latestProps.current;
            const { active, activatorEvent, collisions, over } = sensorContext.current;
            if (!active || !activatorEvent) {
                return;
            }
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])({
                "DndContext.DndContext.useEffect": ()=>{
                    onDragMove == null ? void 0 : onDragMove(event);
                    dispatchMonitorEvent({
                        type: 'onDragMove',
                        event
                    });
                }
            }["DndContext.DndContext.useEffect"]);
        }
    }["DndContext.DndContext.useEffect"], [
        scrollAdjustedTranslate.x,
        scrollAdjustedTranslate.y
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DndContext.DndContext.useEffect": ()=>{
            const { active, activatorEvent, collisions, droppableContainers, scrollAdjustedTranslate } = sensorContext.current;
            if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) {
                return;
            }
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])({
                "DndContext.DndContext.useEffect": ()=>{
                    setOver(over);
                    onDragOver == null ? void 0 : onDragOver(event);
                    dispatchMonitorEvent({
                        type: 'onDragOver',
                        event
                    });
                }
            }["DndContext.DndContext.useEffect"]);
        }
    }["DndContext.DndContext.useEffect"], [
        overId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "DndContext.DndContext.useIsomorphicLayoutEffect": ()=>{
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
        }
    }["DndContext.DndContext.useIsomorphicLayoutEffect"], [
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
    const publicContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[publicContext]": ()=>{
            const context = {
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
            return context;
        }
    }["DndContext.DndContext.useMemo[publicContext]"], [
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
    const internalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DndContext.DndContext.useMemo[internalContext]": ()=>{
            const context = {
                activatorEvent,
                activators,
                active,
                activeNodeRect,
                ariaDescribedById: {
                    draggable: draggableDescribedById
                },
                dispatch,
                draggableNodes,
                over,
                measureDroppableContainers
            };
            return context;
        }
    }["DndContext.DndContext.useMemo[internalContext]"], [
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DndMonitorContext.Provider, {
        value: registerMonitorListener
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InternalContext.Provider, {
        value: internalContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PublicContext.Provider, {
        value: publicContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ActiveDraggableContext.Provider, {
        value: transform
    }, children)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RestoreFocus, {
        disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Accessibility, {
        ...accessibility,
        hiddenTextDescribedById: draggableDescribedById
    }));
    "TURBOPACK unreachable";
    function getAutoScrollerOptions() {
        const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
        const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
        const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
        if (typeof autoScroll === 'object') {
            return {
                ...autoScroll,
                enabled
            };
        }
        return {
            enabled
        };
    }
});
const NullContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const defaultRole = 'button';
const ID_PREFIX = 'Draggable';
function useDraggable(_ref) {
    let { id, data, disabled = false, attributes } = _ref;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])(ID_PREFIX);
    const { activators, activatorEvent, active, activeNodeRect, ariaDescribedById, draggableNodes, over } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InternalContext);
    const { role = defaultRole, roleDescription = 'draggable', tabIndex = 0 } = attributes != null ? attributes : {};
    const isDragging = (active == null ? void 0 : active.id) === id;
    const transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(isDragging ? ActiveDraggableContext : NullContext);
    const [node, setNodeRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeRef"])();
    const [activatorNode, setActivatorNodeRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeRef"])();
    const listeners = useSyntheticListeners(activators, id);
    const dataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDraggable.useIsomorphicLayoutEffect": ()=>{
            draggableNodes.set(id, {
                id,
                key,
                node,
                activatorNode,
                data: dataRef
            });
            return ({
                "useDraggable.useIsomorphicLayoutEffect": ()=>{
                    const node = draggableNodes.get(id);
                    if (node && node.key === key) {
                        draggableNodes.delete(id);
                    }
                }
            })["useDraggable.useIsomorphicLayoutEffect"];
        }
    }["useDraggable.useIsomorphicLayoutEffect"], [
        draggableNodes,
        id
    ]);
    const memoizedAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDraggable.useMemo[memoizedAttributes]": ()=>({
                role,
                tabIndex,
                'aria-disabled': disabled,
                'aria-pressed': isDragging && role === defaultRole ? true : undefined,
                'aria-roledescription': roleDescription,
                'aria-describedby': ariaDescribedById.draggable
            })
    }["useDraggable.useMemo[memoizedAttributes]"], [
        disabled,
        role,
        tabIndex,
        isDragging,
        roleDescription,
        ariaDescribedById.draggable
    ]);
    return {
        active,
        activatorEvent,
        activeNodeRect,
        attributes: memoizedAttributes,
        isDragging,
        listeners: disabled ? undefined : listeners,
        node,
        over,
        setNodeRef,
        setActivatorNodeRef,
        transform
    };
}
function useDndContext() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PublicContext);
}
const ID_PREFIX$1 = 'Droppable';
const defaultResizeObserverConfig = {
    timeout: 25
};
function useDroppable(_ref) {
    let { data, disabled = false, id, resizeObserverConfig } = _ref;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUniqueId"])(ID_PREFIX$1);
    const { active, dispatch, over, measureDroppableContainers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InternalContext);
    const previous = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        disabled
    });
    const resizeObserverConnected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callbackId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { disabled: resizeObserverDisabled, updateMeasurementsFor, timeout: resizeObserverTimeout } = {
        ...defaultResizeObserverConfig,
        ...resizeObserverConfig
    };
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(updateMeasurementsFor != null ? updateMeasurementsFor : id);
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDroppable.useCallback[handleResize]": ()=>{
            if (!resizeObserverConnected.current) {
                // ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
                // assuming the element is rendered and displayed.
                resizeObserverConnected.current = true;
                return;
            }
            if (callbackId.current != null) {
                clearTimeout(callbackId.current);
            }
            callbackId.current = setTimeout({
                "useDroppable.useCallback[handleResize]": ()=>{
                    measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [
                        ids.current
                    ]);
                    callbackId.current = null;
                }
            }["useDroppable.useCallback[handleResize]"], resizeObserverTimeout);
        }
    }["useDroppable.useCallback[handleResize]"], [
        resizeObserverTimeout
    ]);
    const resizeObserver = useResizeObserver({
        callback: handleResize,
        disabled: resizeObserverDisabled || !active
    });
    const handleNodeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDroppable.useCallback[handleNodeChange]": (newElement, previousElement)=>{
            if (!resizeObserver) {
                return;
            }
            if (previousElement) {
                resizeObserver.unobserve(previousElement);
                resizeObserverConnected.current = false;
            }
            if (newElement) {
                resizeObserver.observe(newElement);
            }
        }
    }["useDroppable.useCallback[handleNodeChange]"], [
        resizeObserver
    ]);
    const [nodeRef, setNodeRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeRef"])(handleNodeChange);
    const dataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppable.useEffect": ()=>{
            if (!resizeObserver || !nodeRef.current) {
                return;
            }
            resizeObserver.disconnect();
            resizeObserverConnected.current = false;
            resizeObserver.observe(nodeRef.current);
        }
    }["useDroppable.useEffect"], [
        nodeRef,
        resizeObserver
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppable.useEffect": ()=>{
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
            return ({
                "useDroppable.useEffect": ()=>dispatch({
                        type: Action.UnregisterDroppable,
                        key,
                        id
                    })
            })["useDroppable.useEffect"];
        }
    }["useDroppable.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDroppable.useEffect": ()=>{
            if (disabled !== previous.current.disabled) {
                dispatch({
                    type: Action.SetDroppableDisabled,
                    id,
                    key,
                    disabled
                });
                previous.current.disabled = disabled;
            }
        }
    }["useDroppable.useEffect"], [
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
    const [clonedChildren, setClonedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [element, setElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const previousChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(children);
    if (!children && !clonedChildren && previousChildren) {
        setClonedChildren(previousChildren);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "AnimationManager.useIsomorphicLayoutEffect": ()=>{
            if (!element) {
                return;
            }
            const key = clonedChildren == null ? void 0 : clonedChildren.key;
            const id = clonedChildren == null ? void 0 : clonedChildren.props.id;
            if (key == null || id == null) {
                setClonedChildren(null);
                return;
            }
            Promise.resolve(animation(id, element)).then({
                "AnimationManager.useIsomorphicLayoutEffect": ()=>{
                    setClonedChildren(null);
                }
            }["AnimationManager.useIsomorphicLayoutEffect"]);
        }
    }["AnimationManager.useIsomorphicLayoutEffect"], [
        animation,
        clonedChildren,
        element
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children, clonedChildren ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(clonedChildren, {
        ref: setElement
    }) : null);
}
const defaultTransform = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
};
function NullifiedContextProvider(_ref) {
    let { children } = _ref;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InternalContext.Provider, {
        value: defaultInternalContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ActiveDraggableContext.Provider, {
        value: defaultTransform
    }, children));
}
const baseStyles = {
    position: 'fixed',
    touchAction: 'none'
};
const defaultTransition = (activatorEvent)=>{
    const isKeyboardActivator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(activatorEvent);
    return isKeyboardActivator ? 'transform 250ms ease' : undefined;
};
const PositionedOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((_ref, ref)=>{
    let { as, activatorEvent, adjustScale, children, className, rect, style, transform, transition = defaultTransition } = _ref;
    if (!rect) {
        return null;
    }
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
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(scaleAdjustedTransform),
        transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : undefined,
        transition: typeof transition === 'function' ? transition(activatorEvent) : transition,
        ...style
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(as, {
        className,
        style: styles,
        ref
    }, children);
});
const defaultDropAnimationSideEffects = (options)=>(_ref)=>{
        let { active, dragOverlay } = _ref;
        const originalStyles = {};
        const { styles, className } = options;
        if (styles != null && styles.active) {
            for (const [key, value] of Object.entries(styles.active)){
                if (value === undefined) {
                    continue;
                }
                originalStyles[key] = active.node.style.getPropertyValue(key);
                active.node.style.setProperty(key, value);
            }
        }
        if (styles != null && styles.dragOverlay) {
            for (const [key, value] of Object.entries(styles.dragOverlay)){
                if (value === undefined) {
                    continue;
                }
                dragOverlay.node.style.setProperty(key, value);
            }
        }
        if (className != null && className.active) {
            active.node.classList.add(className.active);
        }
        if (className != null && className.dragOverlay) {
            dragOverlay.node.classList.add(className.dragOverlay);
        }
        return function cleanup() {
            for (const [key, value] of Object.entries(originalStyles)){
                active.node.style.setProperty(key, value);
            }
            if (className != null && className.active) {
                active.node.classList.remove(className.active);
            }
        };
    };
const defaultKeyframeResolver = (_ref2)=>{
    let { transform: { initial, final } } = _ref2;
    return [
        {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(initial)
        },
        {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(final)
        }
    ];
};
const defaultDropAnimationConfiguration = {
    duration: 250,
    easing: 'ease',
    keyframes: defaultKeyframeResolver,
    sideEffects: /*#__PURE__*/ defaultDropAnimationSideEffects({
        styles: {
            active: {
                opacity: '0'
            }
        }
    })
};
function useDropAnimation(_ref3) {
    let { config, draggableNodes, droppableContainers, measuringConfiguration } = _ref3;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])({
        "useDropAnimation.useEvent": (id, node)=>{
            if (config === null) {
                return;
            }
            const activeDraggable = draggableNodes.get(id);
            if (!activeDraggable) {
                return;
            }
            const activeNode = activeDraggable.node.current;
            if (!activeNode) {
                return;
            }
            const measurableNode = getMeasurableNode(node);
            if (!measurableNode) {
                return;
            }
            const { transform } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dnd$2d$kit$2b$utilities$40$3$2e$2$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(node).getComputedStyle(node);
            const parsedTransform = parseTransform(transform);
            if (!parsedTransform) {
                return;
            }
            const animation = typeof config === 'function' ? config : createDefaultDropAnimation(config);
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
        }
    }["useDropAnimation.useEvent"]);
}
function createDefaultDropAnimation(options) {
    const { duration, easing, sideEffects, keyframes } = {
        ...defaultDropAnimationConfiguration,
        ...options
    };
    return (_ref4)=>{
        let { active, dragOverlay, transform, ...rest } = _ref4;
        if (!duration) {
            // Do not animate if animation duration is zero.
            return;
        }
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
        if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) {
            // The start and end keyframes are the same, infer that there is no animation needed.
            return;
        }
        const cleanup = sideEffects == null ? void 0 : sideEffects({
            active,
            dragOverlay,
            ...rest
        });
        const animation = dragOverlay.node.animate(animationKeyframes, {
            duration,
            easing,
            fill: 'forwards'
        });
        return new Promise((resolve)=>{
            animation.onfinish = ()=>{
                cleanup == null ? void 0 : cleanup();
                resolve();
            };
        });
    };
}
let key = 0;
function useKey(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useKey.useMemo": ()=>{
            if (id == null) {
                return;
            }
            key++;
            return key;
        }
    }["useKey.useMemo"], [
        id
    ]);
}
const DragOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo((_ref)=>{
    let { adjustScale = false, children, dropAnimation: dropAnimationConfig, style, transition, modifiers, wrapperElement = 'div', className, zIndex = 999 } = _ref;
    const { activatorEvent, active, activeNodeRect, containerNodeRect, draggableNodes, droppableContainers, dragOverlay, over, measuringConfiguration, scrollableAncestors, scrollableAncestorRects, windowRect } = useDndContext();
    const transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ActiveDraggableContext);
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
    }); // We need to wait for the active node to be measured before connecting the drag overlay ref
    // otherwise collisions can be computed against a mispositioned drag overlay
    const ref = initialRect ? dragOverlay.setRef : undefined;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NullifiedContextProvider, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AnimationManager, {
        animation: dropAnimation
    }, active && key ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PositionedOverlay, {
        key: key,
        id: active.id,
        ref: ref,
        as: wrapperElement,
        activatorEvent: activatorEvent,
        adjustScale: adjustScale,
        className: className,
        transition: transition,
        rect: initialRect,
        style: {
            zIndex,
            ...style
        },
        transform: modifiedTransform
    }, children) : null));
});
;
 //# sourceMappingURL=core.esm.js.map
}}),
}]);

//# sourceMappingURL=43146_%40dnd-kit_core_dist_core_esm_a3578c96.js.map