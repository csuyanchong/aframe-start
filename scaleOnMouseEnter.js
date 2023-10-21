AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
        to: { default: { x: 2.5, y: 2.5, z: 2.5 }, type: 'vec3' }
    },

    init: function () {
        let data = this.data;
        let elem = this.el;
        this.el.addEventListener('mouseenter', function () {
            elem.object3D.scale.copy(data.to);
        });
    }
});