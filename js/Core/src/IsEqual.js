(function(NS) {
	
	var LARGE_ARRAY_SIZE = 200,
	HASH_UNDEFINED = "__lodash_hash_undefined__",
	UNORDERED_COMPARE_FLAG = 1,
	PARTIAL_COMPARE_FLAG = 2,
	MAX_SAFE_INTEGER = 9007199254740991,
	argsTag = "[object Arguments]",
	arrayTag = "[object Array]",
	boolTag = "[object Boolean]",
	dateTag = "[object Date]",
	errorTag = "[object Error]",
	funcTag = "[object Function]",
	genTag = "[object GeneratorFunction]",
	mapTag = "[object Map]",
	numberTag = "[object Number]",
	objectTag = "[object Object]",
	promiseTag = "[object Promise]",
	regexpTag = "[object RegExp]",
	setTag = "[object Set]",
	stringTag = "[object String]",
	symbolTag = "[object Symbol]",
	weakMapTag = "[object WeakMap]",
	arrayBufferTag = "[object ArrayBuffer]",
	dataViewTag = "[object DataView]",
	float32Tag = "[object Float32Array]",
	float64Tag = "[object Float64Array]",
	int8Tag = "[object Int8Array]",
	int16Tag = "[object Int16Array]",
	int32Tag = "[object Int32Array]",
	uint8Tag = "[object Uint8Array]",
	uint8ClampedTag = "[object Uint8ClampedArray]",
	uint16Tag = "[object Uint16Array]",
	uint32Tag = "[object Uint32Array]",
	reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	reIsHostCtor = /^\[object .+?Constructor\]$/,
	reIsUint = /^(?:0|[1-9]\d*)$/,
	typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
var freeGlobal = "object" == typeof global && global && global.Object === Object && global,
	freeSelf = "object" == typeof self && self && self.Object === Object && self,
	root = freeGlobal || freeSelf || Function("return this")(),
	freeExports = "object" == typeof exports && exports && !exports.nodeType && exports,
	freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module,
	moduleExports = freeModule && freeModule.exports === freeExports,
	freeProcess = moduleExports && freeGlobal.process,
	nodeUtil = function() {
		try {
			return freeProcess && freeProcess.binding("util")
		} catch (e) {}
	}(),
	nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	function arraySome(e, t) {
		for (var a = -1, r = e ? e.length : 0; ++a < r;)
			if (t(e[a], a, e)) return !0;
		return !1
	}

	function baseTimes(e, t) {
		for (var a = -1, r = Array(e); ++a < e;) r[a] = t(a);
		return r
	}

	function baseUnary(t) {
		return function(e) {
			return t(e)
		}
	}

	function getValue(e, t) {
		return null == e ? void 0 : e[t]
	}

	function isHostObject(e) {
		var t = !1;
		if (null != e && "function" != typeof e.toString) try {
			t = !!(e + "")
		} catch (e) {}
		return t
	}

	function mapToArray(e) {
		var a = -1,
			r = Array(e.size);
		return e.forEach(function(e, t) {
			r[++a] = [t, e]
		}), r
	}

	function overArg(t, a) {
		return function(e) {
			return t(a(e))
		}
	}

	function setToArray(e) {
		var t = -1,
			a = Array(e.size);
		return e.forEach(function(e) {
			a[++t] = e
		}), a
	}
	var arrayProto = Array.prototype,
		funcProto = Function.prototype,
		objectProto = Object.prototype,
		coreJsData = root["__core-js_shared__"],
		maskSrcKey = function() {
			var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
			return e ? "Symbol(src)_1." + e : ""
		}(),
		funcToString = funcProto.toString,
		hasOwnProperty = objectProto.hasOwnProperty,
		objectToString = objectProto.toString,
		reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
		Symbol = root.Symbol,
		Uint8Array = root.Uint8Array,
		propertyIsEnumerable = objectProto.propertyIsEnumerable,
		splice = arrayProto.splice,
		nativeKeys = overArg(Object.keys, Object),
		DataView = getNative(root, "DataView"),
		Map = getNative(root, "Map"),
		Promise = getNative(root, "Promise"),
		Set = getNative(root, "Set"),
		WeakMap = getNative(root, "WeakMap"),
		nativeCreate = getNative(Object, "create"),
		dataViewCtorString = toSource(DataView),
		mapCtorString = toSource(Map),
		promiseCtorString = toSource(Promise),
		setCtorString = toSource(Set),
		weakMapCtorString = toSource(WeakMap),
		symbolProto = Symbol ? Symbol.prototype : void 0,
		symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;

	function Hash(e) {
		var t = -1,
			a = e ? e.length : 0;
		for (this.clear(); ++t < a;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}

	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {}
	}

	function hashDelete(e) {
		return this.has(e) && delete this.__data__[e]
	}

	function hashGet(e) {
		var t = this.__data__;
		if (nativeCreate) {
			var a = t[e];
			return a === HASH_UNDEFINED ? void 0 : a
		}
		return hasOwnProperty.call(t, e) ? t[e] : void 0
	}

	function hashHas(e) {
		var t = this.__data__;
		return nativeCreate ? void 0 !== t[e] : hasOwnProperty.call(t, e)
	}

	function hashSet(e, t) {
		return this.__data__[e] = nativeCreate && void 0 === t ? HASH_UNDEFINED : t, this
	}

	function ListCache(e) {
		var t = -1,
			a = e ? e.length : 0;
		for (this.clear(); ++t < a;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}

	function listCacheClear() {
		this.__data__ = []
	}

	function listCacheDelete(e) {
		var t = this.__data__,
			a = assocIndexOf(t, e);
		return !(a < 0) && (a == t.length - 1 ? t.pop() : splice.call(t, a, 1), !0)
	}

	function listCacheGet(e) {
		var t = this.__data__,
			a = assocIndexOf(t, e);
		return a < 0 ? void 0 : t[a][1]
	}

	function listCacheHas(e) {
		return -1 < assocIndexOf(this.__data__, e)
	}

	function listCacheSet(e, t) {
		var a = this.__data__,
			r = assocIndexOf(a, e);
		return r < 0 ? a.push([e, t]) : a[r][1] = t, this
	}

	function MapCache(e) {
		var t = -1,
			a = e ? e.length : 0;
		for (this.clear(); ++t < a;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}

	function mapCacheClear() {
		this.__data__ = {
			hash: new Hash,
			map: new(Map || ListCache),
			string: new Hash
		}
	}

	function mapCacheDelete(e) {
		return getMapData(this, e).deleter(e)
	}

	function mapCacheGet(e) {
		return getMapData(this, e).get(e)
	}

	function mapCacheHas(e) {
		return getMapData(this, e).has(e)
	}

	function mapCacheSet(e, t) {
		return getMapData(this, e).set(e, t), this
	}

	function SetCache(e) {
		var t = -1,
			a = e ? e.length : 0;
		for (this.__data__ = new MapCache; ++t < a;) this.add(e[t])
	}

	function setCacheAdd(e) {
		return this.__data__.set(e, HASH_UNDEFINED), this
	}

	function setCacheHas(e) {
		return this.__data__.has(e)
	}

	function Stack(e) {
		this.__data__ = new ListCache(e)
	}

	function stackClear() {
		this.__data__ = new ListCache
	}

	function stackDelete(e) {
		return this.__data__.deleter(e)
	}

	function stackGet(e) {
		return this.__data__.get(e)
	}

	function stackHas(e) {
		return this.__data__.has(e)
	}

	function stackSet(e, t) {
		var a = this.__data__;
		if (a instanceof ListCache) {
			var r = a.__data__;
			if (!Map || r.length < LARGE_ARRAY_SIZE - 1) return r.push([e, t]), this;
			a = this.__data__ = new MapCache(r)
		}
		return a.set(e, t), this
	}

	function arrayLikeKeys(e, t) {
		var a = isArray(e) || isArguments(e) ? baseTimes(e.length, String) : [],
			r = a.length,
			o = !!r;
		for (var n in e) !t && !hasOwnProperty.call(e, n) || o && ("length" == n || isIndex(n, r)) || a.push(n);
		return a
	}

	function assocIndexOf(e, t) {
		for (var a = e.length; a--;)
			if (eq(e[a][0], t)) return a;
		return -1
	}

	function baseGetTag(e) {
		return objectToString.call(e)
	}

	function baseIsEqual(e, t, a, r, o) {
		return e === t || (null == e || null == t || !isObject(e) && !isObjectLike(t) ? e != e && t != t : baseIsEqualDeep(e, t, baseIsEqual, a, r, o))
	}

	function baseIsEqualDeep(e, t, a, r, o, n) {
		var s = isArray(e),
			i = isArray(t),
			c = arrayTag,
			u = arrayTag;
		s || (c = (c = getTag(e)) == argsTag ? objectTag : c), i || (u = (u = getTag(t)) == argsTag ? objectTag : u);
		var g = c == objectTag && !isHostObject(e),
			y = u == objectTag && !isHostObject(t),
			p = c == u;
		if (p && !g) return n || (n = new Stack), s || isTypedArray(e) ? equalArrays(e, t, a, r, o, n) : equalByTag(e, t, c, a, r, o, n);
		if (!(o & PARTIAL_COMPARE_FLAG)) {
			var l = g && hasOwnProperty.call(e, "__wrapped__"),
				f = y && hasOwnProperty.call(t, "__wrapped__");
			if (l || f) {
				var h = l ? e.value() : e,
					T = f ? t.value() : t;
				return n || (n = new Stack), a(h, T, r, o, n)
			}
		}
		return !!p && (n || (n = new Stack), equalObjects(e, t, a, r, o, n))
	}

	function baseIsNative(e) {
		return !(!isObject(e) || isMasked(e)) && (isFunction(e) || isHostObject(e) ? reIsNative : reIsHostCtor).test(toSource(e))
	}

	function baseIsTypedArray(e) {
		return isObjectLike(e) && isLength(e.length) && !!typedArrayTags[objectToString.call(e)]
	}

	function baseKeys(e) {
		if (!isPrototype(e)) return nativeKeys(e);
		var t = [];
		for (var a in Object(e)) hasOwnProperty.call(e, a) && "constructor" != a && t.push(a);
		return t
	}

	function equalArrays(e, t, a, r, o, n) {
		var s = o & PARTIAL_COMPARE_FLAG,
			i = e.length,
			c = t.length;
		if (i != c && !(s && i < c)) return !1;
		var u = n.get(e);
		if (u && n.get(t)) return u == t;
		var g = -1,
			y = !0,
			p = o & UNORDERED_COMPARE_FLAG ? new SetCache : void 0;
		for (n.set(e, t), n.set(t, e); ++g < i;) {
			var l = e[g],
				f = t[g];
			if (r) var h = s ? r(f, l, g, t, e, n) : r(l, f, g, e, t, n);
			if (void 0 !== h) {
				if (h) continue;
				y = !1;
				break
			}
			if (p) {
				if (!arraySome(t, function(e, t) {
						if (!p.has(t) && (l === e || a(l, e, r, o, n))) return p.add(t)
					})) {
					y = !1;
					break
				}
			} else if (l !== f && !a(l, f, r, o, n)) {
				y = !1;
				break
			}
		}
		return n.deleter(e), n.deleter(t), y
	}

	function equalByTag(e, t, a, r, o, n, s) {
		switch (a) {
			case dataViewTag:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case arrayBufferTag:
				return !(e.byteLength != t.byteLength || !r(new Uint8Array(e), new Uint8Array(t)));
			case boolTag:
			case dateTag:
			case numberTag:
				return eq(+e, +t);
			case errorTag:
				return e.name == t.name && e.message == t.message;
			case regexpTag:
			case stringTag:
				return e == t + "";
			case mapTag:
				var i = mapToArray;
			case setTag:
				var c = n & PARTIAL_COMPARE_FLAG;
				if (i || (i = setToArray), e.size != t.size && !c) return !1;
				var u = s.get(e);
				if (u) return u == t;
				n |= UNORDERED_COMPARE_FLAG, s.set(e, t);
				var g = equalArrays(i(e), i(t), r, o, n, s);
				return s.deleter(e), g;
			case symbolTag:
				if (symbolValueOf) return symbolValueOf.call(e) == symbolValueOf.call(t)
		}
		return !1
	}

	function equalObjects(e, t, a, r, o, n) {
		var s = o & PARTIAL_COMPARE_FLAG,
			i = keys(e),
			c = i.length;
		if (c != keys(t).length && !s) return !1;
		for (var u = c; u--;) {
			var g = i[u];
			if (!(s ? g in t : hasOwnProperty.call(t, g))) return !1
		}
		var y = n.get(e);
		if (y && n.get(t)) return y == t;
		var p = !0;
		n.set(e, t), n.set(t, e);
		for (var l = s; ++u < c;) {
			var f = e[g = i[u]],
				h = t[g];
			if (r) var T = s ? r(h, f, g, t, e, n) : r(f, h, g, e, t, n);
			if (!(void 0 === T ? f === h || a(f, h, r, o, n) : T)) {
				p = !1;
				break
			}
			l || (l = "constructor" == g)
		}
		if (p && !l) {
			var b = e.constructor,
				_ = t.constructor;
			b != _ && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (p = !1)
		}
		return n.deleter(e), n.deleter(t), p
	}

	function getMapData(e, t) {
		var a = e.__data__;
		return isKeyable(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
	}

	function getNative(e, t) {
		var a = getValue(e, t);
		return baseIsNative(a) ? a : void 0
	}
	Hash.prototype.clear = hashClear, Hash.prototype.deleter = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, ListCache.prototype.deleter = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, MapCache.prototype.clear = mapCacheClear, MapCache.prototype.deleter = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas, Stack.prototype.clear = stackClear, Stack.prototype.deleter = stackDelete, Stack.prototype.get = stackGet, Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;
	var getTag = baseGetTag;

	function isIndex(e, t) {
		return !!(t = null == t ? MAX_SAFE_INTEGER : t) && ("number" == typeof e || reIsUint.test(e)) && -1 < e && e % 1 == 0 && e < t
	}

	function isKeyable(e) {
		var t = typeof e;
		return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
	}

	function isMasked(e) {
		return !!maskSrcKey && maskSrcKey in e
	}

	function isPrototype(e) {
		var t = e && e.constructor;
		return e === ("function" == typeof t && t.prototype || objectProto)
	}

	function toSource(e) {
		if (null != e) {
			try {
				return funcToString.call(e)
			} catch (e) {}
			try {
				return e + ""
			} catch (e) {}
		}
		return ""
	}

	function eq(e, t) {
		return e === t || e != e && t != t
	}

	function isArguments(e) {
		return isArrayLikeObject(e) && hasOwnProperty.call(e, "callee") && (!propertyIsEnumerable.call(e, "callee") || objectToString.call(e) == argsTag)
	}(DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) && (getTag = function(e) {
		var t = objectToString.call(e),
			a = t == objectTag ? e.constructor : void 0,
			r = a ? toSource(a) : void 0;
		if (r) switch (r) {
			case dataViewCtorString:
				return dataViewTag;
			case mapCtorString:
				return mapTag;
			case promiseCtorString:
				return promiseTag;
			case setCtorString:
				return setTag;
			case weakMapCtorString:
				return weakMapTag
		}
		return t
	});
	var isArray = Array.isArray;

	function isArrayLike(e) {
		return null != e && isLength(e.length) && !isFunction(e)
	}

	function isArrayLikeObject(e) {
		return isObjectLike(e) && isArrayLike(e)
	}

	function isEqual(e, t) {
		return baseIsEqual(e, t)
	}

	function isFunction(e) {
		var t = isObject(e) ? objectToString.call(e) : "";
		return t == funcTag || t == genTag
	}

	function isLength(e) {
		return "number" == typeof e && -1 < e && e % 1 == 0 && e <= MAX_SAFE_INTEGER
	}

	function isObject(e) {
		var t = typeof e;
		return !!e && ("object" == t || "function" == t)
	}

	function isObjectLike(e) {
		return !!e && "object" == typeof e
	}
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	function keys(e) {
		return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e)
	}


	if (!NS.hasOwnProperty("IsEqual")) {
		Object.defineProperty(NS, "IsEqual", {
			configurable: false,
			enumerable: false,
			value: isEqual
		});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
