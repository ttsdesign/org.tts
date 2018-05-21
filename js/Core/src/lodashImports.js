	/* Implements the following:
	Array.Difference
	Array.Intersection
	Array.Union
	Cone
	IsEqual
	*/

	(function(NS) {

		var LARGE_ARRAY_SIZE = 200,
			HASH_UNDEFINED = "__lodash_hash_undefined__",
			INFINITY = 1 / 0,
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
			reFlags = /\w*$/,
			reIsHostCtor = /^\[object .+?Constructor\]$/,
			reIsUint = /^(?:0|[1-9]\d*)$/,
			cloneableTags = {};
			cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
			var typedArrayTags = {};
			typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
			freeGlobal = "object" == typeof global && global && global.Object === Object && global,
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

		function addMapEntry(e, t) {
			return e.set(t[0], t[1]), e
		}

		function addSetEntry(e, t) {
			return e.add(t), e
		}

		function apply(e, t, a) {
			switch (a.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, a[0]);
				case 2:
					return e.call(t, a[0], a[1]);
				case 3:
					return e.call(t, a[0], a[1], a[2])
			}
			return e.apply(t, a)
		}

		function arrayEach(e, t) {
			for (var a = -1, r = e ? e.length : 0; ++a < r && !1 !== t(e[a], a, e););
			return e
		}

		function arrayIncludes(e, t) {
			return !!(e ? e.length : 0) && baseIndexOf(e, t, 0) > -1
		}

		function arrayIncludesWith(e, t, a) {
			for (var r = -1, n = e ? e.length : 0; ++r < n;)
				if (a(t, e[r])) return !0;
			return !1
		}

		function arrayMap(e, t) {
			for (var a = -1, r = e ? e.length : 0, n = Array(r); ++a < r;) n[a] = t(e[a], a, e);
			return n
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

		function arraySome(e, t) {
			for (var a = -1, r = e ? e.length : 0; ++a < r;)
				if (t(e[a], a, e)) return !0;
			return !1
		}

		function baseFindIndex(e, t, a, r) {
			for (var n = e.length, o = a + (r ? 1 : -1); r ? o-- : ++o < n;)
				if (t(e[o], o, e)) return o;
			return -1
		}

		function baseIndexOf(e, t, a) {
			if (t != t) return baseFindIndex(e, baseIsNaN, a);
			for (var r = a - 1, n = e.length; ++r < n;)
				if (e[r] === t) return r;
			return -1
		}

		function baseIntersection(t, e, a) {
			for (var r = a ? arrayIncludesWith : arrayIncludes, n = t[0].length, o = t.length, s = o, c = Array(o), i = 1 / 0, h = []; s--;) {
				var u = t[s];
				s && e && (u = arrayMap(u, baseUnary(e))), i = nativeMin(u.length, i), c[s] = !a && (e || n >= 120 && u.length >= 120) ? new SetCache(s && u) : void 0
			}
			u = t[0];
			var l = -1,
				f = c[0];
			t: for (; ++l < n && h.length < i;) {
				var p = u[l],
					_ = e ? e(p) : p;
				if (p = a || 0 !== p ? p : 0, !(f ? cacheHas(f, _) : r(h, _, a))) {
					for (s = o; --s;) {
						var y = c[s];
						if (!(y ? cacheHas(y, _) : r(t[s], _, a))) continue t
					}
					f && f.push(_), h.push(p)
				}
			}
			return h
		}

		function baseIsNaN(e) {
			return e != e
		}

		function baseProperty(e) {
			return function(t) {
				return null == t ? void 0 : t[e]
			}
		}

		function baseTimes(e, t) {
			for (var a = -1, r = Array(e); ++a < e;) r[a] = t(a);
			return r
		}

		function baseUnary(e) {
			return function(t) {
				return e(t)
			}
		}

		function cacheHas(e, t) {
			return e.has(t)
		}

		function castArrayLikeObject(t) {
			return isArrayLikeObject(t) ? t : []
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
			nativeMax = Math.max,
			nativeMin = Math.min,
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
			spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0,
			nativeMax = Math.max,
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
			return assocIndexOf(this.__data__, e) > -1
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

		Stack.prototype.clear = stackClear;
		Stack.prototype['deleter'] = stackDelete;
		Stack.prototype.get = stackGet;
		Stack.prototype.has = stackHas;
		Stack.prototype.set = stackSet;

		function arrayLikeKeys(e, t) {
			var a = isArray(e) || isArguments(e) ? baseTimes(e.length, String) : [],
				r = a.length,
				o = !!r;
			for (var n in e) !t && !hasOwnProperty.call(e, n) || o && ("length" == n || isIndex(n, r)) || a.push(n);
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

		function baseDifference(e, t, a, r) {
			var n = -1,
				o = arrayIncludes,
				s = !0,
				c = e.length,
				i = [],
				u = t.length;
			if (!c) return i;
			a && (t = arrayMap(t, baseUnary(a))), r ? (o = arrayIncludesWith, s = !1) : t.length >= LARGE_ARRAY_SIZE && (o = cacheHas, s = !1, t = new SetCache(t));
			e: for (; ++n < c;) {
				var h = e[n],
					l = a ? a(h) : h;
				if (h = r || 0 !== h ? h : 0, s && l == l) {
					for (var f = u; f--;)
						if (t[f] === l) continue e;
					i.push(h)
				} else o(t, l, r) || i.push(h)
			}
			return i
		}

		function baseFlatten(e, t, a, r, n) {
			var o = -1,
				s = e.length;
			for (a || (a = isFlattenable), n || (n = []); ++o < s;) {
				var c = e[o];
				t > 0 && a(c) ? t > 1 ? baseFlatten(c, t - 1, a, r, n) : arrayPush(n, c) : r || (n[n.length] = c)
			}
			return n
		}

		function baseGetAllKeys(e, t, a) {
			var r = t(e);
			return isArray(e) ? r : arrayPush(r, a(e))
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

		function baseRest(e, t) {
			return t = nativeMax(void 0 === t ? e.length - 1 : t, 0),
				function() {
					for (var a = arguments, r = -1, n = nativeMax(a.length - t, 0), o = Array(n); ++r < n;) o[r] = a[t + r];
					r = -1;
					for (var s = Array(t + 1); ++r < t;) s[r] = a[r];
					return s[t] = o, apply(e, this, s)
				}
		}

		function baseUniq(e, t, a) {
			var r = -1,
				n = arrayIncludes,
				o = e.length,
				s = !0,
				i = [],
				c = i;
			if (a) s = !1, n = arrayIncludesWith;
			else if (o >= LARGE_ARRAY_SIZE) {
				var u = t ? null : createSet(e);
				if (u) return setToArray(u);
				s = !1, n = cacheHas, c = new SetCache
			} else c = t ? [] : i;
			e: for (; ++r < o;) {
				var h = e[r],
					l = t ? t(h) : h;
				if (h = a || 0 !== h ? h : 0, s && l == l) {
					for (var f = c.length; f--;)
						if (c[f] === l) continue e;
					t && c.push(l), i.push(h)
				} else n(c, l, a) || (c !== i && c.push(l), i.push(h))
			}
			return i
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

		var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

		Hash.prototype.clear = hashClear, Hash.prototype.deleter = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, ListCache.prototype.deleter = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, MapCache.prototype.clear = mapCacheClear, MapCache.prototype.deleter = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas;
		var createSet = Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY ? function(e) {
				return new Set(e)
			} : noop,
			getLength = baseProperty("length");

		
		var getTag = baseGetTag;
		
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

		function isFlattenable(e) {
			return isArray(e) || isArguments(e) || !!(spreadableSymbol && e && e[spreadableSymbol])
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
		Hash.prototype.clear = hashClear, Hash.prototype.deleter = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, ListCache.prototype.deleter = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, MapCache.prototype.clear = mapCacheClear, MapCache.prototype.deleter = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas;
		var difference = baseRest(function(e, t) {
			return isArrayLikeObject(e) ? baseDifference(e, baseFlatten(t, 1, isArrayLikeObject, !0)) : []
		});

		var intersection = baseRest(function(t) {
			var e = arrayMap(t, castArrayLikeObject);
			return e.length && e[0] === t[0] ? baseIntersection(e) : []
		});

		var union = baseRest(function(e) {
			return baseUniq(baseFlatten(e, 1, isArrayLikeObject, !0))
		});

		function cloneDeep(e) {
			return baseClone(e, !0, !0)
		}

		function eq(e, t) {
			return e === t || e != e && t != t
		}

		function isArguments(e) {
			return isArrayLikeObject(e) && hasOwnProperty.call(e, "callee") && (!propertyIsEnumerable.call(e, "callee") || objectToString.call(e) == argsTag)
		}
		var isArray = Array.isArray;

		function isArrayLike(e) {
			return null != e && isLength(e.length) && !isFunction(e)
		}

		function isArrayLikeObject(e) {
			return isObjectLike(e) && isArrayLike(e)
		}

		var isBuffer = nativeIsBuffer || stubFalse;

		function isEqual(e, t) {
			return baseIsEqual(e, t)
		}

		function isFunction(e) {
			var t = isObject(e) ? objectToString.call(e) : "";
			return t == funcTag || t == genTag
		}

		function isLength(e) {
			return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER
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

		function stubArray() {
			return []
		}

		function stubFalse() {
			return !1
		}


		///////////////////////////////////////////////////////

		if (!Array.hasOwnProperty("Difference")) {
			Object.defineProperty(Array, "Difference", {
				configurable: false,
				enumerable: false,
				value: difference
			});
		}

		if (!Array.prototype.hasOwnProperty("Difference")) {
			Object.defineProperty(Array.prototype, "Difference", {
				configurable: false,
				enumerable: false,
				value: function (a) {
					return Array.Difference(this, a)
				}
			});
		}

		if (!Array.hasOwnProperty("DifferenceBoth")) {
			Object.defineProperty(Array, "DifferenceBoth", {
				configurable: false,
				enumerable: false,
				value: function (a, b) {
					return Array.Difference(a, b).concat(Array.Difference(b, a));
				}
			});
		}

		if (!Array.prototype.hasOwnProperty("DifferenceBoth")) {
			Object.defineProperty(Array.prototype, "DifferenceBoth", {
				configurable: false,
				enumerable: false,
				value: function (a) {
					return Array.DifferenceBoth(this, a)
				}
			});
		}

		if (!Array.hasOwnProperty("Intersection")) {
			Object.defineProperty(Array, "Intersection", {
				configurable: false,
				enumerable: false,
				value: intersection
			});
		}

		if (!Array.prototype.hasOwnProperty("Intersection")) {
			Object.defineProperty(Array.prototype, "Intersection", {
				configurable: false,
				enumerable: false,
				value: function (a) {
					return Array.Intersection(this, a)
				}
			});
		}


		if (!Array.hasOwnProperty("Union")) {
			Object.defineProperty(Array, "Union", {
				configurable: false,
				enumerable: false,
				value: union
			});
		}

		if (!Array.prototype.hasOwnProperty("Union")) {
			Object.defineProperty(Array.prototype, "Union", {
				configurable: false,
				enumerable: false,
				value: function (a) {
					return Array.Union(this, a)
				}
			})
		}


		if (!NS.hasOwnProperty("Clone")) {
			Object.defineProperty(NS, "Clone", {
				configurable: false,
				enumerable: false,
				value: cloneDeep
			});
		}

		if (!NS.hasOwnProperty("IsEqual")) {
			Object.defineProperty(NS, "IsEqual", {
				configurable: false,
				enumerable: false,
				value: isEqual
			});
		}

	}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
