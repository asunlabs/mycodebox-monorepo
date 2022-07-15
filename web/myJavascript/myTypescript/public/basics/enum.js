"use strict";
var Resource;
(function (Resource) {
    Resource[Resource["KOR"] = 0] = "KOR";
    Resource[Resource["JPN"] = 1] = "JPN";
    Resource[Resource["CHN"] = 2] = "CHN";
})(Resource || (Resource = {}));
const flags = (country) => {
    console.log(country);
};
flags(Resource.KOR);
flags(Resource.JPN);
flags(Resource.CHN);
