import ReactDOM from "react-dom";
import Calculator from "../view/Calculator";

class CalculatorController {
  initialize() {
    const emitter = this.initEmitter();
    this.model = this.initModel(emitter);
    this.initView(emitter, this.model);
  }

  initEmitter() {
    emitter.on("CalculateEvent", _ => {
      this.model.calculate();
    })

    emitter.on("AddValueEvent", content => {
      this.model.addValue(content.value, content.type);
    });

    emitter.on("ResetEvent", _ => {
      this.model.reset();
    })

    return emitter;
  }

  initView(emitter, model) {
    const cont = document.getElementById("app");
    ReactDOM.render(
      <Calculator emitter={emitter} model={model} />,
      cont
    );
  }
}

export default CalculatorController;