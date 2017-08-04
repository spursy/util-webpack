import './css/common.css'
import Layer from './components/layer/layer.js'

const App = function() {
    const NUM = 1;
    alert(NUM);
    console.log(layer);

    let layer = new Layer()
    let dom = document.getElementById('app')
    dom.innerHTML = layer.tpl({
        name: 'john',
        arr:['apple','xiaomi','oppo']
    })
}

new App()