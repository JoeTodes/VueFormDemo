var app = new Vue({
    el: '#app',
    data: {
        services: [
            ["Landscape Maintenance (pruning / weed removal)", 10, "/ Hr", 0],
            [
                "Treatment & fertilization",
                0.003,
                "/ Square Foot (typically 3x / year)",
                0,
            ],
            [
                "Lawn Thatching / clean up",
                0.004,
                "/ Square Foot (typically done weekly)",
                0,
            ],
            ["Grass cutting", 0.004, "/ Square Foot (typically 1x / year)", 0],
            ["Mulching", 0.001, "/ Square Foot", 0],
            ["Seeding", 0.007, "/ Square Foot", 0],
            ["Aeration", 0.003, "/ Square Foot (typically 1x / year)", 0],
            ["Tree-health inspections", 5, "/ Tree", 0],
            ["Tree trimming", 40, "/ Tree", 0],
            ["Shrub pruning", 10, "/ Hr", 0],
            ["Weed management", 10, "/ Hr", 0],
            ["Tree removal", 40, "/ Hr", 0],
            ["Landscape Construction", 40, "/ Hr + Materials", 0],
            ["Decking & fencing", 40, "/ Hr + Materials", 0],
            ["Retaining walls", 40, "/ Hr + Materials", 0],
            ["Brick paving & pavers", 40, "/ Hr + Materials", 0],
            ["Patios & pergolas", 40, "/ Hr + Materials", 0],
            ["Water features & ponds", 50, "/ Hr + Materials", 0],
            ["Planting trees & shrubs", 40, "/ Hr + Materials", 0],
            ["Artificial grass / Astroturf", 40, "/ Hr + Materials", 0],
            ["Outdoor lighting / heating & firepits", 40, "/ Hr + Materials", 0],
            ["Lawn / sod installation", 20, "/ Hr + Materials", 0],
        ],
        total: 0
    },
    methods: {
        totalPrice: function () {
            var tot = 0;
            this.services.forEach((service) => {
                tot += parseInt(service[3]) * service[1];
            });
            this.total = tot
        }
    }
})