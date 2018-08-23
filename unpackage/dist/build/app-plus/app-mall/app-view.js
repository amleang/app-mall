var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.6vv_20180111_fbi*/
window.__wcc_version__='v0.6vv_20180111_fbi'
window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true}
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};
if(typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__={};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if("undefined"!==typeof debugInfo)
e.stack += "\n "+" "+" "+" at "+debugInfo[g.opindex][0]+":"+debugInfo[g.opindex][1]+":"+debugInfo[g.opindex][2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
return rev;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "" );
return value;
}
else
{
return raw;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
return grb( z[opindex], env, scope, global, nothing );
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
return r===1 ? $gdc(o(),undefined,2) : o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.debuginfo_set = __WXML_GLOBAL__.debuginfo_set || {};
var debugInfo=__WXML_GLOBAL__.debuginfo_set.$gwx || [];
if ( !__WXML_GLOBAL__.ops_init.$gwx){
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index$057ff1a7']);debugInfo.push(['./components/index$057ff1a7.wxml',1,48]);Z([3,'_view data-v-13014915 index']);debugInfo.push(['./components/index$057ff1a7.wxml',1,77]);Z([3,'_scroll-view data-v-13014915 index-bd']);debugInfo.push(['./components/index$057ff1a7.wxml',1,126]);Z([3,'_scroll-view data-v-13014915 swiper-tab']);debugInfo.push(['./components/index$057ff1a7.wxml',1,207]);Z([3,'tab-bar']);debugInfo.push(['./components/index$057ff1a7.wxml',1,191]);Z([[7],[3,'scrollLeft']]);debugInfo.push(['./components/index$057ff1a7.wxml',1,270]);Z([3,'index']);debugInfo.push(['./components/index$057ff1a7.wxml',1,358]);Z([3,'tab']);debugInfo.push(['./components/index$057ff1a7.wxml',1,378]);Z([[7],[3,'tabs']]);debugInfo.push(['./components/index$057ff1a7.wxml',1,334]);Z([3,'tab.id']);debugInfo.push(['./components/index$057ff1a7.wxml',1,301]);Z([[6],[[7],[3,'tab']],[3,'id']]);debugInfo.push(['./components/index$057ff1a7.wxml',1,314]);Z([3,'handleProxy']);debugInfo.push(['./components/index$057ff1a7.wxml',1,439]);Z([a,[3,'_view data-v-13014915 '],[[4],[[5],[[5],[1,'swiper-tab-list']],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'on'],[1,'']]]]]);debugInfo.push(['./components/index$057ff1a7.wxml',1,510]);Z([[7],[3,'$k']]);debugInfo.push(['./components/index$057ff1a7.wxml',1,495]);Z([[7],[3,'index']]);debugInfo.push(['./components/index$057ff1a7.wxml',1,419]);Z([[2,'+'],[1,'0-'],[[7],[3,'index']]]);debugInfo.push(['./components/index$057ff1a7.wxml',1,466]);Z(z[10]);debugInfo.push(['./components/index$057ff1a7.wxml',1,393]);Z([a,[[6],[[7],[3,'tab']],[3,'name']]]);debugInfo.push(['./components/index$057ff1a7.wxml',1,591]);Z([3,'_view data-v-13014915 search']);debugInfo.push(['./components/index$057ff1a7.wxml',1,645]);Z([3,'\n			搜索\n		']);debugInfo.push(['./components/index$057ff1a7.wxml',1,676]);Z([1,true]);debugInfo.push(['./components/index$057ff1a7.wxml',3,54]);Z([3,'_swiper data-v-13014915']);debugInfo.push(['./components/index$057ff1a7.wxml',3,131]);Z([1,1000]);debugInfo.push(['./components/index$057ff1a7.wxml',3,94]);Z(z[20]);debugInfo.push(['./components/index$057ff1a7.wxml',3,34]);Z([1,3000]);debugInfo.push(['./components/index$057ff1a7.wxml',3,74]);Z([3,'height:35%;']);debugInfo.push(['./components/index$057ff1a7.wxml',3,111]);Z([3,'_swiper-item data-v-13014915']);debugInfo.push(['./components/index$057ff1a7.wxml',3,176]);Z([3,'_view data-v-13014915 swiper-item']);debugInfo.push(['./components/index$057ff1a7.wxml',3,219]);Z([3,'_image data-v-13014915']);debugInfo.push(['./components/index$057ff1a7.wxml',3,385]);Z([3,'aspectFill']);debugInfo.push(['./components/index$057ff1a7.wxml',3,334]);Z([3,'http://img.anlyzhao.com/3188799691524b4d99754b989ff075bb.jpg']);debugInfo.push(['./components/index$057ff1a7.wxml',3,266]);Z([3,'width:100%;height:100%;']);debugInfo.push(['./components/index$057ff1a7.wxml',3,353]);Z(z[26]);debugInfo.push(['./components/index$057ff1a7.wxml',3,459]);Z(z[27]);debugInfo.push(['./components/index$057ff1a7.wxml',3,502]);Z(z[28]);debugInfo.push(['./components/index$057ff1a7.wxml',3,668]);Z(z[29]);debugInfo.push(['./components/index$057ff1a7.wxml',3,617]);Z([3,'http://img.anlyzhao.com/74f833d766ac445aaef60e6c5b9e0dfe.jpg']);debugInfo.push(['./components/index$057ff1a7.wxml',3,549]);Z(z[31]);debugInfo.push(['./components/index$057ff1a7.wxml',3,636]);Z(z[26]);debugInfo.push(['./components/index$057ff1a7.wxml',3,742]);Z(z[27]);debugInfo.push(['./components/index$057ff1a7.wxml',3,785]);Z([3,'文本']);debugInfo.push(['./components/index$057ff1a7.wxml',3,821]);Z([3,'_view data-v-13014915 product-list']);debugInfo.push(['./components/index$057ff1a7.wxml',3,870]);Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3']]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/index$057ff1a7.wxml',3,922]);Z([3,'product$556e366e']);debugInfo.push(['./components/index$057ff1a7.wxml',3,956]);Z([3,'index$54d6cdda']);debugInfo.push(['./components/index$54d6cdda.wxml',1,15]);Z([3,'_view data-v-64a1acf0 main']);debugInfo.push(['./components/index$54d6cdda.wxml',1,44]);Z([3,'_view data-v-64a1acf0 head']);debugInfo.push(['./components/index$54d6cdda.wxml',1,85]);Z([3,'_view data-v-64a1acf0 head-img']);debugInfo.push(['./components/index$54d6cdda.wxml',1,126]);Z([3,'_image data-v-64a1acf0']);debugInfo.push(['./components/index$54d6cdda.wxml',1,206]);Z([[6],[[7],[3,'userinfo']],[3,'avatarUrl']]);debugInfo.push(['./components/index$54d6cdda.wxml',1,170]);Z([3,'_view data-v-64a1acf0 username']);debugInfo.push(['./components/index$54d6cdda.wxml',1,252]);Z([a,[3,'\n				'],[[6],[[7],[3,'userinfo']],[3,'nickName']],[3,'\n			']]);debugInfo.push(['./components/index$54d6cdda.wxml',1,285]);Z([3,'_view data-v-64a1acf0 head-btn']);debugInfo.push(['./components/index$54d6cdda.wxml',3,31]);Z(z[11]);debugInfo.push(['./components/index$54d6cdda.wxml',3,112]);Z([3,'_view data-v-64a1acf0 btn']);debugInfo.push(['./components/index$54d6cdda.wxml',3,76]);Z(z[13]);debugInfo.push(['./components/index$54d6cdda.wxml',3,161]);Z([1,'0']);debugInfo.push(['./components/index$54d6cdda.wxml',3,139]);Z([3,'\n				更新资料\n			']);debugInfo.push(['./components/index$54d6cdda.wxml',3,170]);Z([3,'index$e84502d4']);debugInfo.push(['./components/index$e84502d4.wxml',1,49]);Z([3,'_view data-v-f80604f8 main']);debugInfo.push(['./components/index$e84502d4.wxml',1,78]);Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/index$e84502d4.wxml',1,122]);Z([3,'shopping$3bf3d37e']);debugInfo.push(['./components/index$e84502d4.wxml',1,156]);Z(z[43]);debugInfo.push(['./components/product$556e366e.wxml',1,15]);Z([3,'_view data-v-94a3c238 product']);debugInfo.push(['./components/product$556e366e.wxml',1,46]);Z(z[6]);debugInfo.push(['./components/product$556e366e.wxml',1,154]);Z([3,'item']);debugInfo.push(['./components/product$556e366e.wxml',1,174]);Z([[7],[3,'productData']]);debugInfo.push(['./components/product$556e366e.wxml',1,123]);Z(z[6]);debugInfo.push(['./components/product$556e366e.wxml',1,92]);Z(z[14]);debugInfo.push(['./components/product$556e366e.wxml',1,104]);Z([a,[3,'_view data-v-94a3c238 product-item '],[[2,'?:'],[[2,'=='],[[2,'%'],[[7],[3,'index']],[1,2]],[1,0]],[1,'product-one'],[1,'product-two']]]);debugInfo.push(['./components/product$556e366e.wxml',1,193]);Z([3,'_image data-v-94a3c238 img']);debugInfo.push(['./components/product$556e366e.wxml',1,294]);Z([[6],[[7],[3,'item']],[3,'image']]);debugInfo.push(['./components/product$556e366e.wxml',1,327]);Z([3,'_view data-v-94a3c238 product-name']);debugInfo.push(['./components/product$556e366e.wxml',1,365]);Z([a,z[51][1],[[6],[[7],[3,'item']],[3,'title']],z[51][3]]);debugInfo.push(['./components/product$556e366e.wxml',1,402]);Z(z[61]);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,15]);Z([3,'_view data-v-6835dcc3 seller-list']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,47]);Z([3,'_view data-v-6835dcc3 seller-item']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,95]);Z([3,'_view data-v-6835dcc3 seller']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,143]);Z([3,'_label data-v-6835dcc3 radio']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,187]);Z([3,'_radio data-v-6835dcc3']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,245]);Z([3,'check']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,231]);Z([3,'_view data-v-6835dcc3 logo']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,293]);Z([3,'_image data-v-6835dcc3']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,429]);Z(z[29]);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,410]);Z([3,'http://p02jejryx.bkt.clouddn.com/69c76fa2419a4c099c774a248a0c7a31.jpg']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,333]);Z([3,'_view data-v-6835dcc3']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,482]);Z([3,'\n				Test001小店\n			']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',1,506]);Z([3,'_view data-v-6835dcc3 product-list']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,31]);Z([3,'_view data-v-6835dcc3 product-item']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,80]);Z(z[78]);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,130]);Z(z[79]);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,188]);Z(z[80]);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,174]);Z(z[82]);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,326]);Z(z[29]);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,307]);Z([3,'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,235]);Z([3,'_view data-v-6835dcc3 name']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,372]);Z([3,'\n					张胜男佛那单佛大赛你佛搜到你发圣诞\n				']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',3,401]);Z([3,'_view data-v-6835dcc3 num']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',5,25]);Z([3,'\n					x1\n				']);debugInfo.push(['./components/shopping$3bf3d37e.wxml',5,53]);Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/main/index.wxml',1,83]);Z(z[0]);debugInfo.push(['./pages/main/index.wxml',1,61]);Z(z[99]);debugInfo.push(['./pages/my/index.wxml',1,83]);Z(z[44]);debugInfo.push(['./pages/my/index.wxml',1,61]);Z(z[99]);debugInfo.push(['./pages/shopping/index.wxml',1,83]);Z(z[58]);debugInfo.push(['./pages/shopping/index.wxml',1,61]);})(z);__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
__WXML_GLOBAL__.debuginfo_set.$gwx=debugInfo;
}
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/index$057ff1a7.wxml','product$556e366e','./components/index$54d6cdda.wxml','./components/index$e84502d4.wxml','shopping$3bf3d37e','./components/product$556e366e.wxml','./components/shopping$3bf3d37e.wxml','./components/slots.wxml','./pages/main/index.wxml','../../components/index$057ff1a7','./pages/my/index.wxml','../../components/index$54d6cdda','./pages/shopping/index.wxml','../../components/index$e84502d4'];d_[x[0]]={}
d_[x[0]]["index$057ff1a7"]=function(e,s,r,gg){
var b=x[0]+':index$057ff1a7'
r.wxVkey=b
gg.f=$gdc(f_["./components/index$057ff1a7.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./components/index$057ff1a7.wxml:view:1:66")
var oB=_n('view')
_r(oB,'class',1,e,s,gg)
cs.push("./components/index$057ff1a7.wxml:scroll-view:1:108")
var xC=_m('scroll-view',['scrollY',-1,'class',2],[],e,s,gg)
cs.push("./components/index$057ff1a7.wxml:scroll-view:1:176")
var oD=_m('scroll-view',['scrollX',-1,'class',3,'id',1,'scrollLeft',2],[],e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./components/index$057ff1a7.wxml:block:1:288")
var cF=function(oH,hG,cI,gg){
cs.push("./components/index$057ff1a7.wxml:block:1:288")
cs.push("./components/index$057ff1a7.wxml:view:1:385")
var lK=_m('view',['bindtap',11,'class',1,'data-comkey',2,'data-current',3,'data-eventid',4,'id',5],[],oH,hG,gg)
var aL=_o(17,oH,hG,gg)
_(lK,aL)
cs.pop()
_(cI,lK)
cs.pop()
return cI
}
fE.wxXCkey=2
_2(8,cF,e,s,gg,fE,'tab','index','tab.id')
cs.pop()
cs.pop()
_(xC,oD)
cs.push("./components/index$057ff1a7.wxml:view:1:634")
var tM=_n('view')
_r(tM,'class',18,e,s,gg)
var eN=_o(19,e,s,gg)
_(tM,eN)
cs.pop()
_(xC,tM)
cs.push("./components/index$057ff1a7.wxml:swiper:3:12")
var bO=_m('swiper',['autoplay',20,'class',1,'duration',2,'indicatorDots',3,'interval',4,'style',5],[],e,s,gg)
cs.push("./components/index$057ff1a7.wxml:swiper-item:3:158")
var oP=_n('swiper-item')
_r(oP,'class',26,e,s,gg)
cs.push("./components/index$057ff1a7.wxml:view:3:208")
var xQ=_n('view')
_r(xQ,'class',27,e,s,gg)
cs.push("./components/index$057ff1a7.wxml:image:3:256")
var oR=_m('image',['class',28,'mode',1,'src',2,'style',3],[],e,s,gg)
cs.pop()
_(xQ,oR)
cs.pop()
_(oP,xQ)
cs.pop()
_(bO,oP)
cs.push("./components/index$057ff1a7.wxml:swiper-item:3:441")
var fS=_n('swiper-item')
_r(fS,'class',32,e,s,gg)
cs.push("./components/index$057ff1a7.wxml:view:3:491")
var cT=_n('view')
_r(cT,'class',33,e,s,gg)
cs.push("./components/index$057ff1a7.wxml:image:3:539")
var hU=_m('image',['class',34,'mode',1,'src',2,'style',3],[],e,s,gg)
cs.pop()
_(cT,hU)
cs.pop()
_(fS,cT)
cs.pop()
_(bO,fS)
cs.push("./components/index$057ff1a7.wxml:swiper-item:3:724")
var oV=_n('swiper-item')
_r(oV,'class',38,e,s,gg)
cs.push("./components/index$057ff1a7.wxml:view:3:774")
var cW=_n('view')
_r(cW,'class',39,e,s,gg)
var oX=_o(40,e,s,gg)
_(cW,oX)
cs.pop()
_(oV,cW)
cs.pop()
_(bO,oV)
cs.pop()
_(xC,bO)
cs.push("./components/index$057ff1a7.wxml:view:3:859")
var lY=_n('view')
_r(lY,'class',41,e,s,gg)
var aZ=_v()
_(lY,aZ)
cs.push("./components/index$057ff1a7.wxml:template:3:908")
var t1=_o(43,e,s,gg)
var e2=_gd(x[0],t1,e_,d_)
if(e2){
var b3=_1(42,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[0],3,956)
cs.pop()
cs.pop()
_(xC,lY)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["index$54d6cdda"]=function(e,s,r,gg){
var b=x[2]+':index$54d6cdda'
r.wxVkey=b
gg.f=$gdc(f_["./components/index$54d6cdda.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
cs.push("./components/index$54d6cdda.wxml:view:1:33")
var oB=_n('view')
_r(oB,'class',45,e,s,gg)
cs.push("./components/index$54d6cdda.wxml:view:1:74")
var xC=_n('view')
_r(xC,'class',46,e,s,gg)
cs.push("./components/index$54d6cdda.wxml:view:1:115")
var oD=_n('view')
_r(oD,'class',47,e,s,gg)
cs.push("./components/index$54d6cdda.wxml:image:1:160")
var fE=_m('image',['mode',-1,'class',48,'src',1],[],e,s,gg)
cs.pop()
_(oD,fE)
cs.push("./components/index$54d6cdda.wxml:view:1:241")
var cF=_n('view')
_r(cF,'class',50,e,s,gg)
var hG=_o(51,e,s,gg)
_(cF,hG)
cs.pop()
_(oD,cF)
cs.pop()
_(xC,oD)
cs.push("./components/index$54d6cdda.wxml:view:3:20")
var oH=_n('view')
_r(oH,'class',52,e,s,gg)
cs.push("./components/index$54d6cdda.wxml:view:3:65")
var cI=_m('view',['bindtap',53,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oJ=_o(57,e,s,gg)
_(cI,oJ)
cs.pop()
_(oH,cI)
cs.pop()
_(xC,oH)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["index$e84502d4"]=function(e,s,r,gg){
var b=x[3]+':index$e84502d4'
r.wxVkey=b
gg.f=$gdc(f_["./components/index$e84502d4.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
cs.push("./components/index$e84502d4.wxml:view:1:67")
var oB=_n('view')
_r(oB,'class',59,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/index$e84502d4.wxml:template:1:108")
var oD=_o(61,e,s,gg)
var fE=_gd(x[3],oD,e_,d_)
if(fE){
var cF=_1(60,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[3],1,156)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var fE=e_[x[3]].i
_ai(fE,x[4],e_,x[3],1,1)
fE.pop()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[5]]={}
d_[x[5]]["product$556e366e"]=function(e,s,r,gg){
var b=x[5]+':product$556e366e'
r.wxVkey=b
gg.f=$gdc(f_["./components/product$556e366e.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
cs.push("./components/product$556e366e.wxml:view:1:35")
var oB=_n('view')
_r(oB,'class',63,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/product$556e366e.wxml:block:1:79")
var oD=function(cF,fE,hG,gg){
cs.push("./components/product$556e366e.wxml:block:1:79")
cs.push("./components/product$556e366e.wxml:view:1:182")
var cI=_n('view')
_r(cI,'class',69,cF,fE,gg)
cs.push("./components/product$556e366e.wxml:image:1:282")
var oJ=_m('image',['class',70,'src',1],[],cF,fE,gg)
cs.pop()
_(cI,oJ)
cs.push("./components/product$556e366e.wxml:view:1:354")
var lK=_n('view')
_r(lK,'class',72,cF,fE,gg)
var aL=_o(73,cF,fE,gg)
_(lK,aL)
cs.pop()
_(cI,lK)
cs.pop()
_(hG,cI)
cs.pop()
return hG
}
xC.wxXCkey=2
_2(66,oD,e,s,gg,xC,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
return r
}
e_[x[5]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["shopping$3bf3d37e"]=function(e,s,r,gg){
var b=x[6]+':shopping$3bf3d37e'
r.wxVkey=b
gg.f=$gdc(f_["./components/shopping$3bf3d37e.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./components/shopping$3bf3d37e.wxml:view:1:36")
var oB=_n('view')
_r(oB,'class',75,e,s,gg)
cs.push("./components/shopping$3bf3d37e.wxml:view:1:84")
var xC=_n('view')
_r(xC,'class',76,e,s,gg)
cs.push("./components/shopping$3bf3d37e.wxml:view:1:132")
var oD=_n('view')
_r(oD,'class',77,e,s,gg)
cs.push("./components/shopping$3bf3d37e.wxml:label:1:175")
var fE=_n('label')
_r(fE,'class',78,e,s,gg)
cs.push("./components/shopping$3bf3d37e.wxml:radio:1:219")
var cF=_m('radio',['class',79,'value',1],[],e,s,gg)
cs.pop()
_(fE,cF)
cs.pop()
_(oD,fE)
cs.push("./components/shopping$3bf3d37e.wxml:view:1:282")
var hG=_n('view')
_r(hG,'class',81,e,s,gg)
cs.push("./components/shopping$3bf3d37e.wxml:image:1:323")
var oH=_m('image',['class',82,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(hG,oH)
cs.pop()
_(oD,hG)
cs.push("./components/shopping$3bf3d37e.wxml:view:1:471")
var cI=_n('view')
_r(cI,'class',85,e,s,gg)
var oJ=_o(86,e,s,gg)
_(cI,oJ)
cs.pop()
_(oD,cI)
cs.pop()
_(xC,oD)
cs.push("./components/shopping$3bf3d37e.wxml:view:3:20")
var lK=_n('view')
_r(lK,'class',87,e,s,gg)
cs.push("./components/shopping$3bf3d37e.wxml:view:3:69")
var aL=_n('view')
_r(aL,'class',88,e,s,gg)
cs.push("./components/shopping$3bf3d37e.wxml:label:3:118")
var tM=_n('label')
_r(tM,'class',89,e,s,gg)
cs.push("./components/shopping$3bf3d37e.wxml:radio:3:162")
var eN=_m('radio',['class',90,'value',1],[],e,s,gg)
cs.pop()
_(tM,eN)
cs.pop()
_(aL,tM)
cs.push("./components/shopping$3bf3d37e.wxml:image:3:225")
var bO=_m('image',['class',92,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(aL,bO)
cs.push("./components/shopping$3bf3d37e.wxml:view:3:361")
var oP=_n('view')
_r(oP,'class',95,e,s,gg)
var xQ=_o(96,e,s,gg)
_(oP,xQ)
cs.pop()
_(aL,oP)
cs.push("./components/shopping$3bf3d37e.wxml:view:5:14")
var oR=_n('view')
_r(oR,'class',97,e,s,gg)
var fS=_o(98,e,s,gg)
_(oR,fS)
cs.pop()
_(aL,oR)
cs.pop()
_(lK,aL)
cs.pop()
_(xC,lK)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var cI=e_[x[7]].i
_ai(cI,x[4],e_,x[7],1,1)
_ai(cI,x[1],e_,x[7],2,2)
cI.pop()
cI.pop()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[x[4],x[1]],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var lK=e_[x[8]].i
_ai(lK,x[9],e_,x[8],1,1)
var aL=_v()
_(r,aL)
cs.push("./pages/main/index.wxml:template:1:49")
var tM=_o(100,e,s,gg)
var eN=_gd(x[8],tM,e_,d_)
if(eN){
var bO=_1(99,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[8],1,61)
cs.pop()
lK.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
var m7=function(e,s,r,gg){
var xQ=e_[x[10]].i
_ai(xQ,x[11],e_,x[10],1,1)
var oR=_v()
_(r,oR)
cs.push("./pages/my/index.wxml:template:1:49")
var fS=_o(102,e,s,gg)
var cT=_gd(x[10],fS,e_,d_)
if(cT){
var hU=_1(101,e,s,gg) || {}
var cur_globalf=gg.f
oR.wxXCkey=3
cT(hU,hU,oR,gg)
gg.f=cur_globalf
}
else _w(fS,x[10],1,61)
cs.pop()
xQ.pop()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
var m8=function(e,s,r,gg){
var cW=e_[x[12]].i
_ai(cW,x[13],e_,x[12],1,1)
var oX=_v()
_(r,oX)
cs.push("./pages/shopping/index.wxml:template:1:49")
var lY=_o(104,e,s,gg)
var aZ=_gd(x[12],lY,e_,d_)
if(aZ){
var t1=_1(103,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[12],1,61)
cs.pop()
cW.pop()
return r
}
e_[x[12]]={f:m8,j:[],i:[],ti:[x[13]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
function checkDeviceWidth() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
const newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
function transformRPX(number) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * deviceWidth;
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid) {
var Ca = {};
var _C= [[[2,1],],["body{background-color:#f6f6f6;height:100%;font-size:",[0,32],";line-height:1.6}\nwx-checkbox,wx-radio{margin-right:",[0,10],"}\n.",[1],"_button{margin-top:",[0,20],";margin-bottom:",[0,20],"}\n.",[1],"_form{width:100%}\n.",[1],"container{display:flex;flex-direction:column;min-height:100%;justify-content:space-between;font-size:",[0,32],";font-family:-apple-system-font,Helvetica Neue,Helvetica,sans-serif}\n.",[1],"page-head{padding:",[0,60]," ",[0,50]," ",[0,80],";text-align:center;line-height:normal;height:",[0,60],"}\n.",[1],"page-head-title{display:inline-block;padding:0 ",[0,40],";font-size:",[0,30],";height:",[0,60],";line-height:",[0,60],";color:#bebebe;box-sizing:border-box;border-bottom:",[0,2]," solid #d8d8d8}\n.",[1],"page-head-desc{padding-top:",[0,20],";color:#9b9b9b;font-size:",[0,32],"}\n.",[1],"page-body{width:100%;flex-grow:1;overflow-x:hidden}\n.",[1],"page-body-wrapper{display:flex;flex-direction:column;align-items:center;width:100%}\n.",[1],"page-body-wording{text-align:center;padding:",[0,200]," ",[0,100],"}\n.",[1],"page-body-info{display:flex;flex-direction:column;align-items:center;background-color:#fff;width:100%;padding:",[0,50]," 0 ",[0,150],"}\n.",[1],"page-body-title{margin-bottom:",[0,100],";font-size:",[0,32],"}\n.",[1],"page-body-text{font-size:",[0,30],";line-height:",[0,52],";color:#ccc}\n.",[1],"page-body-text-small{font-size:",[0,24],";color:#000;margin-bottom:",[0,100],"}\n.",[1],"page-foot{margin:",[0,100]," 0 ",[0,30],";text-align:center;color:#1aad19;font-size:0}\n.",[1],"icon-foot{width:",[0,152],";height:",[0,23],"}\n.",[1],"page-section{width:100%;margin-bottom:",[0,60],"}\n.",[1],"page-section_center{display:flex;flex-direction:column;align-items:center}\n.",[1],"page-section:last-child{margin-bottom:0}\n.",[1],"page-section-gap{box-sizing:border-box;padding:0 ",[0,30],"}\n.",[1],"page-section-spacing{box-sizing:border-box;padding:0 ",[0,80],"}\n.",[1],"page-section-title{font-size:",[0,28],";color:#999;margin-top:",[0,10],";margin-bottom:",[0,10],";padding-left:",[0,30],";padding-right:",[0,30],"}\n.",[1],"page-section-gap .",[1],"page-section-title{padding-left:0;padding-right:0}\n.",[1],"index-hd{padding:",[0,90],";text-align:center}\n.",[1],"index-logo{width:",[0,140],";height:",[0,140],"}\n.",[1],"btn-area{margin-top:",[0,60],";box-sizing:border-box;width:100%;padding:0 ",[0,30],"}\n.",[1],"image-plus{width:",[0,150],";height:",[0,150],";border:",[0,2]," solid #d9d9d9;position:relative}\n.",[1],"image-plus-nb{border:0}\n.",[1],"image-plus-text{color:#888;font-size:",[0,28],"}\n.",[1],"image-plus-horizontal{width:",[0,4],";height:",[0,80],"}\n.",[1],"image-plus-horizontal,.",[1],"image-plus-vertical{position:absolute;top:50%;left:50%;background-color:#d9d9d9;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}\n.",[1],"image-plus-vertical{width:",[0,80],";height:",[0,4],"}\n.",[1],"color1{background-color:#1aad19;color:#fff}\n.",[1],"color2{background-color:#2782d7;color:#fff}\n.",[1],"color3{background-color:#f1f1f1;color:#353535}\n",],[".",[1],"index,body{display:flex}\n.",[1],"index{flex:1;flex-direction:column;overflow:hidden;height:100%;background-color:#f2f2f2}\n.",[1],"index-bd{width:",[0,750],";height:100%}\n.",[1],"swiper-item{height:100%;display:block;text-align:center}\n.",[1],"swiper-tab{width:100%;white-space:nowrap;line-height:",[0,62],";height:",[0,70],";background-color:#fff}\n.",[1],"swiper-tab-list{font-size:",[0,30],";width:",[0,150],";display:inline-block}\n.",[1],"search,.",[1],"swiper-tab-list{text-align:center;color:#777}\n.",[1],"search{height:",[0,60],";line-height:",[0,60],";background-color:#fff;border:",[0,1]," solid #f0f0f0;font-size:",[0,28],"}\n.",[1],"on{color:red;border-bottom:",[0,5]," solid red}\n.",[1],"swiper-box{flex:1;width:100%;height:100%}\n.",[1],"swiper-box wx-view{text-align:center}\n.",[1],"tab-list{width:100%;height:",[0,90],";line-height:",[0,90],";text-align:left;border-bottom:",[0,2]," solid #efeff4}\n.",[1],"product-list{padding-top:",[0,20],"}\n.",[1],"product-item{display:flex;flex-direction:column;width:",[0,345],";float:left;margin-bottom:",[0,20],";font-size:",[0,26],"}\n.",[1],"product-item .",[1],"img{width:",[0,320],";height:",[0,320],"}\n.",[1],"product-one{margin-left:",[0,20],";margin-right:",[0,10],";background-color:#fff}\n.",[1],"product-two{margin-right:",[0,20],";margin-left:",[0,10],";background-color:#fff}\n.",[1],"product-name{height:",[0,80],";padding:0 ",[0,10],";overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n",],[".",[1],"head{height:",[0,350],";background-color:#ff4500}\n.",[1],"head-img{display:flex;align-items:center;justify-content:center;height:",[0,280],";flex-direction:column}\n.",[1],"head-img wx-image{height:",[0,150],";width:",[0,150],";border-radius:100%}\n.",[1],"head-img .",[1],"username{height:",[0,40],";line-height:",[0,40],";color:#fff}\n.",[1],"head-btn{display:flex;align-items:center;justify-content:center}\n.",[1],"head-btn .",[1],"btn{width:",[0,150],";height:",[0,40],";line-height:",[0,40],";text-align:center;font-size:",[0,20],";color:#fff;border-radius:",[0,10],";border:",[0,1]," solid #fff;background:transparent}\n",],[".",[1],"main,body{display:flex}\n.",[1],"main{flex:1;flex-direction:column;overflow:hidden;height:100%;background-color:#f2f2f2}\n.",[1],"seller-item{background-color:#fff}\n.",[1],"seller{padding:0 ",[0,20],";display:flex;align-items:center;height:",[0,80],";border-bottom:",[0,2]," solid #eaeaea}\n.",[1],"seller .",[1],"logo{margin-right:",[0,10],"}\n.",[1],"seller .",[1],"logo,.",[1],"seller .",[1],"logo wx-image{height:",[0,70],";width:",[0,70],"}\n.",[1],"product-list{padding:0 ",[0,20],"}\n.",[1],"product-item{height:",[0,150],";display:flex;align-items:center}\n.",[1],"product-item wx-image{width:",[0,140],";height:100%}\n",],];
function makeup(file, suffix) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1]) + "px" + res;
else if ( op == 1)
res = suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], suffix) + res;
}
else
res = content + res
}
return res;
}
return function(suffix, opt){
if ( typeof suffix === "undefined" ) suffix = "";
if ( opt && opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = transformVar(makeup(file, suffix));
var style = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
style.type = 'text/css';
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
}
}
setCssToHead([])();setCssToHead([[2,0]])();

;var __pageFrameEndTime__ = Date.now();
