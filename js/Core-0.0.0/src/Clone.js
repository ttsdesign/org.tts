(function(NS) {

	var LARGE_ARRAY_SIZE = 200,
		HASH_UNDEFINED = "__lodash_hash_undefined__",
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
		reFlags = /\w*$/,
		reIsHostCtor = /^\[object .+?Constructor\]$/,
		reIsUint = /^(?:0|[1-9]\d*)$/,
		cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
	var freeGlobal = "object" == typeof global && global && global.Object === Object && global,
		freeSelf = "object" == typeof self && self && self.Object === Object && self,
		root = freeGlobal || freeSelf || Function("return this")(),
		freeExports = "object" == typeof exports && exports && !exports.nodeType && exports,
		freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module,
		moduleExports = freeModule && freeModule.exports === freeExports;

	function addMapEntry(e, t) {
		return e.set(t[0], t[1]), e
	}

	function addSetEntry(e, t) {
		return e.add(t), e
	}

	function arrayEach(e, t) {
		for (var a = -1, r = e ? e.length : 0; ++a < r && !1 !== t(e[a], a, e););
		return e
	}

	function arrayPush(e, t) {
		for (var a = -1, r = t.length, n = e.length; ++a < r;) e[n + a] = t[a];
		return e
	}

	function arrayReduce(e, t, a, r) {
		var n = -1,
			o = e ? e.length : 0;
		for (r && o && (a = e[++n]); ++n < o;) a = t(a, e[n], n, e);
		return a
	}

	function baseTimes(e, t) {
		for (var a = -1, r = Array(e); ++a < e;) r[a] = t(a);
		return r
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
		Buffer = moduleExports ? root.Buffer : void 0,
		Symbol = root.Symbol,
		Uint8Array = root.Uint8Array,
		getPrototype = overArg(Object.getPrototypeOf, Object),
		objectCreate = Object.create,
		propertyIsEnumerable = objectProto.propertyIsEnumerable,
		splice = arrayProto.splice,
		nativeGetSymbols = Object.getOwnPropertySymbols,
		nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0,
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
			n = !!r;
		for (var o in e) !t && !hasOwnProperty.call(e, o) || n && ("length" == o || isIndex(o, r)) || a.push(o);
		return a
	}

	function assignValue(e, t, a) {
		var r = e[t];
		hasOwnProperty.call(e, t) && eq(r, a) && (void 0 !== a || t in e) || (e[t] = a)
	}

	function assocIndexOf(e, t) {
		for (var a = e.length; a--;)
			if (eq(e[a][0], t)) return a;
		return -1
	}

	function baseAssign(e, t) {
		return e && copyObject(t, keys(t), e)
	}

	function baseClone(a, r, n, o, e, t, c) {
		var s;
		if (o && (s = t ? o(a, e, t, c) : o(a)), void 0 !== s) return s;
		if (!isObject(a)) return a;
		var i = isArray(a);
		if (i) {
			if (s = initCloneArray(a), !r) return copyArray(a, s)
		} else {
			var u = getTag(a),
				l = u == funcTag || u == genTag;
			if (isBuffer(a)) return cloneBuffer(a, r);
			if (u == objectTag || u == argsTag || l && !t) {
				if (isHostObject(a)) return t ? a : {};
				if (s = initCloneObject(l ? {} : a), !r) return copySymbols(a, baseAssign(s, a))
			} else {
				if (!cloneableTags[u]) return t ? a : {};
				s = initCloneByTag(a, u, baseClone, r)
			}
		}
		c || (c = new Stack);
		var g = c.get(a);
		if (g) return g;
		if (c.set(a, s), !i) var f = n ? getAllKeys(a) : keys(a);
		return arrayEach(f || a, function(e, t) {
			f && (e = a[t = e]), assignValue(s, t, baseClone(e, r, n, o, t, a, c))
		}), s
	}

	function baseCreate(e) {
		return isObject(e) ? objectCreate(e) : {}
	}

	function baseGetAllKeys(e, t, a) {
		var r = t(e);
		return isArray(e) ? r : arrayPush(r, a(e))
	}

	function baseGetTag(e) {
		return objectToString.call(e)
	}

	function baseIsNative(e) {
		return !(!isObject(e) || isMasked(e)) && (isFunction(e) || isHostObject(e) ? reIsNative : reIsHostCtor).test(toSource(e))
	}

	function baseKeys(e) {
		if (!isPrototype(e)) return nativeKeys(e);
		var t = [];
		for (var a in Object(e)) hasOwnProperty.call(e, a) && "constructor" != a && t.push(a);
		return t
	}

	function cloneBuffer(e, t) {
		if (t) return e.slice();
		var a = new e.constructor(e.length);
		return e.copy(a), a
	}

	function cloneArrayBuffer(e) {
		var t = new e.constructor(e.byteLength);
		return new Uint8Array(t).set(new Uint8Array(e)), t
	}

	function cloneDataView(e, t) {
		var a = t ? cloneArrayBuffer(e.buffer) : e.buffer;
		return new e.constructor(a, e.byteOffset, e.byteLength)
	}

	function cloneMap(e, t, a) {
		return arrayReduce(t ? a(mapToArray(e), !0) : mapToArray(e), addMapEntry, new e.constructor)
	}

	function cloneRegExp(e) {
		var t = new e.constructor(e.source, reFlags.exec(e));
		return t.lastIndex = e.lastIndex, t
	}

	function cloneSet(e, t, a) {
		return arrayReduce(t ? a(setToArray(e), !0) : setToArray(e), addSetEntry, new e.constructor)
	}

	function cloneSymbol(e) {
		return symbolValueOf ? Object(symbolValueOf.call(e)) : {}
	}

	function cloneTypedArray(e, t) {
		var a = t ? cloneArrayBuffer(e.buffer) : e.buffer;
		return new e.constructor(a, e.byteOffset, e.length)
	}

	function copyArray(e, t) {
		var a = -1,
			r = e.length;
		for (t || (t = Array(r)); ++a < r;) t[a] = e[a];
		return t
	}

	function copyObject(e, t, a, r) {
		a || (a = {});
		for (var n = -1, o = t.length; ++n < o;) {
			var c = t[n],
				s = r ? r(a[c], e[c], c, a, e) : void 0;
			assignValue(a, c, void 0 === s ? e[c] : s)
		}
		return a
	}

	function copySymbols(e, t) {
		return copyObject(e, getSymbols(e), t)
	}

	function getAllKeys(e) {
		return baseGetAllKeys(e, keys, getSymbols)
	}

	function getMapData(e, t) {
		var a = e.__data__;
		return isKeyable(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
	}

	function getNative(e, t) {
		var a = getValue(e, t);
		return baseIsNative(a) ? a : void 0
	}
	Hash.prototype.clear = hashClear, Hash.prototype.deleter = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, ListCache.prototype.deleter = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, MapCache.prototype.clear = mapCacheClear, MapCache.prototype.deleter = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, Stack.prototype.clear = stackClear, Stack.prototype.deleter = stackDelete, Stack.prototype.get = stackGet, Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray,
		getTag = baseGetTag;

	function initCloneArray(e) {
		var t = e.length,
			a = e.constructor(t);
		return t && "string" == typeof e[0] && hasOwnProperty.call(e, "index") && (a.index = e.index, a.input = e.input), a
	}

	function initCloneObject(e) {
		return "function" != typeof e.constructor || isPrototype(e) ? {} : baseCreate(getPrototype(e))
	}

	function initCloneByTag(e, t, a, r) {
		var n = e.constructor;
		switch (t) {
			case arrayBufferTag:
				return cloneArrayBuffer(e);
			case boolTag:
			case dateTag:
				return new n(+e);
			case dataViewTag:
				return cloneDataView(e, r);
			case float32Tag:
			case float64Tag:
			case int8Tag:
			case int16Tag:
			case int32Tag:
			case uint8Tag:
			case uint8ClampedTag:
			case uint16Tag:
			case uint32Tag:
				return cloneTypedArray(e, r);
			case mapTag:
				return cloneMap(e, r, a);
			case numberTag:
			case stringTag:
				return new n(e);
			case regexpTag:
				return cloneRegExp(e);
			case setTag:
				return cloneSet(e, r, a);
			case symbolTag:
				return cloneSymbol(e)
		}
	}

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

	function cloneDeep(e) {
		return baseClone(e, !0, !0)
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
	var isBuffer = nativeIsBuffer || stubFalse;

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

	function keys(e) {
		return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e)
	}

	function stubArray() {
		return []
	}

	function stubFalse() {
		return !1
	}

	if (!NS.hasOwnProperty("Clone")) {
		Object.defineProperty(NS, "Clone", {
			configurable: false,
			enumerable: false,
			value: cloneDeep
		});
	}


}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
