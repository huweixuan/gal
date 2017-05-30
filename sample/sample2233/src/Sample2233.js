var modelDef22 = {
    "type":"Live2D Model Setting",
    "name":"22",
    "model":"assets/live2d/22/22.moc",
    "textures":[
        "assets/live2d/22/22.2048/texture_00.png",
    ]
};

var modelDef33 = {
    "type":"Live2D Model Setting",
    "name":"33",
    "model":"assets/live2d/33/33.moc",
    "textures":[
        "assets/live2d/33/33.2048/texture_00.png",
    ]
};

function initSample() {
    new Simple(document.getElementById('22glcanvas'), modelDef22, 0);
    new Simple(document.getElementById('33glcanvas'), modelDef33, 1);
}