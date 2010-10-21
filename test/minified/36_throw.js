function ZipCode(zip){zip=new String(zip);pattern=/[0-9]{5}([- ]?[0-9]{4})?/;if(pattern.test(zip)){this.value=zip.match(pattern)[0];this.valueOf=function(){return this.value};this.toString=function(){return String(this.value)}}else throw new ZipCodeFormatException(zip)}
function ZipCodeFormatException(value){this.value=value;this.message="does not conform to the expected format for a zip code";this.toString=function(){return this.value+this.message}};var ZIPCODE_INVALID=-1,ZIPCODE_UNKNOWN_ERROR=-2
function verifyZipCode(z){try{z=new ZipCode(z)}catch(e){if(e instanceof ZipCodeFormatException){return ZIPCODE_INVALID}else return ZIPCODE_UNKNOWN_ERROR};return z};a=verifyZipCode(95060);b=verifyZipCode(9560);c=verifyZipCode("a");d=verifyZipCode("95060");e=verifyZipCode("95060 1234")