export default {
    computers: {
        desktop: [
            {
                id: '1', 
                name: 'pc1', 
                images: ['/img/products/hp1.jpg', '/img/products/hp2.jpg', '/img/products/hp3.jpg'], 
                price: 
                14300, title: 'HP 290 G1 MT',
                feature: {
                    Proccessor: 'Intel Core i7-7700',
                    Chipset: 'Intel H110',
                    RAM: '4 GB',
                    HDD: '1 TB',
                }
            },
        ],
        laptop: [

        ]
    },
    components: {
        videocards: [
            {id: '2', name: 'vd1', images: ['/img/products/vd1.png', '/img/products/vd2.png'], price: 25199, title: 'MSI PCI-Ex GeForce RTX 3070 VENTUS 2X OC 8GB GDDR6'}
        ],
        cpu: [
            {id: '3', name: 'cpu1', images: ['/img/products/cpu1.jpg', '/img/products/cpu2.jpg'], price: 5000, title: 'Processor AMD Ryzen 5 3500X 3.6GHz/32MB'}
        ],
        bla: [
                {id: '4', name: 'bla1', images: ['/img/products/cpu1.jpg', '/img/products/cpu2.jpg'], price: 5000, title: 'Processor AMD Ryzen 5 3500X 3.6GHz/32MB'}
        ],
        vla: [
            {id: '4', name: 'vla1', images: ['/img/products/cpu1.jpg', '/img/products/cpu2.jpg'], price: 5000, title: 'Processor AMD Ryzen 5 3500X 3.6GHz/32MB'}
        ]
    }
}