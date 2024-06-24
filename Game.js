AFRAME.registerComponent("game-play", {
    schema: {
        elementId: { type: "string", default: "#coin1"},
    },
    update: function() {
        this.iscollided(this.data.elementId);
    },

    iscollided: function(elementId) {
        const element = document.querySelector(elementId);
        element.addEventListener(collider, e=> {
            if (elementId.includes("#coin")) {
                element.setAttribute("visible", false);
                console.log("fish collision");
            }
            else if(elementId.includes("#fish")) {
                console.log("fish collision");
            }
        });
    }
});