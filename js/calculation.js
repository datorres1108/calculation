const contenido = document.getElementById("contenido");

const formularios = {

    form1: `
        <h4>Cuatro por Mil</h4>
        <form>
            <div class="col-md-3">
                <label class="form-label">Impuesto X (4, 5, 6)</label>
                <input type="number" id="impuesto" name="impuesto" class="form-control" placeholder="Ej: 4" value="4">
            </div>
            <div class="col-md-3">
                <label class="form-label">Valor base Calculo</label>
                <input type="number" id="valbase" name="valbase" class="form-control" placeholder="Ej: 1000000">
            </div>
            <div class="col-md-3">
                <label class="form-label">Valor Total (opcional)</label>
                <input type="number" id="valtotal" class="form-control" placeholder="Para cálculo inverso">
            </div>
            <hr>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary" onclick="calcularXxX()">Calcular</button>
                <button type="button" class="btn btn-success" onclick="limpiarFormXporMil()">Limpiar</button>
                <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
            </div>
        </form>
        <hr>
        <div id="data-result" class="mt-3"></div>
    `,

    form2: `
        <h4>(%) Porcentajes Prestamos</h4>
        <form>
            <div class="col-md-3">
                <label class="form-label">Valor solcitado</label>
                <input type="number" id="valsolicita" name="valsolicita" class="form-control" placeholder="100000">
            </div>
            <div class="col-md-3">
                <label class="form-label">(%)Porcentaje Aplicar</label>
                <input type="number" id="porcentaje" name="porcentaje" class="form-control" placeholder="Ej: 10">
            </div>
            <div class="col-md-3">
                <label class="form-label">Tiempo (Meses para pago)</label>
                <input type="number" id="tiempo" class="form-control" placeholder="6">
            </div>
            <hr>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary" onclick="calcularPorcentajeP()">Calcular</button>
                <button type="button" class="btn btn-success" onclick="limpiarFormPorcentajeP()">Limpiar</button>
                <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
            </div>
        </form>
        <div id="data-result" class="mt-3"></div>
    `,

    form3: `
        <h4>(%) Calcular Dctos</h4>
        <form>
            <div class="col-md-3">
                <label class="form-label">Precio Full</label>
                <input type="number" id="preciofull" name="preciofull" class="form-control" placeholder="200000">
            </div>
            <div class="col-md-3">
                <label class="form-label">(%)Dcto Aplicar</label>
                <input type="number" id="dcto" name="dcto" class="form-control" placeholder="Ej: 20">
            </div>
            <hr>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary" onclick="calcularDcto()">Calcular</button>
                <button type="button" class="btn btn-success" onclick="limpiarFormDcto()">Limpiar</button>
                <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
            </div>
        </form>
        <div id="data-result" class="mt-3"></div>
    `,

    form4: `
    <h4>Agregar Porcentajes (%)</h4>
    <form>
        <div class="col-md-3">
            <label class="form-label">Valor</label>
            <input type="number" id="valoraplica" name="valoraplica" class="form-control" placeholder="100000">
        </div>
        <div class="col-md-3">
            <label class="form-label">(%)Porcentaje Agregar</label>
            <input type="number" id="porcentaje" name="porcentaje" class="form-control" placeholder="Ej: 10">
        </div>
        <hr>
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" onclick="calcularAggporcentajes()">Calcular</button>
            <button type="button" class="btn btn-success" onclick="limpiarFormAggporcentajes()">Limpiar</button>
            <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form5: `
    <h4>IVA 19(%)</h4>
    <form>
        <div class="col-md-3">
            <label class="form-label">Valor</label>
            <input type="number" id="valorbase" name="valorbase" class="form-control" placeholder="100000">
        </div>
        <div class="col-md-3">
            <label class="form-label">IVA 19(%)</label>
            <input type="number" id="iva" name="iva" class="form-control" placeholder="Ej: 10" value="19">
        </div>
        <hr>
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" onclick="calcularIVA()">Calcular</button>
            <button type="button" class="btn btn-success" onclick="limpiarFormIVA()">Limpiar</button>
            <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form6: `
    <h4>Calculos Porcentuales Difereridos<br>Compras, Retiros, Prestamos</h4>
    <form>
        <div class="col-md-3">
            <label class="form-label">Valor Monto</label>
            <input type="number" id="montoInput" name="montoInput" class="form-control" placeholder="100000">
        </div>
        <div class="col-md-3">
            <label class="form-label">Cuotas Diferidas</label>
            <input type="number" id="cuotasInput" name="cuotasInput" class="form-control" placeholder="Ej: 3">
        </div>
        <div class="col-md-3">
            <label class="form-label">Interes(%)</label>
            <input type="number" id="interesInput" name="interesInput" class="form-control" placeholder="Ej: 7">
        </div>
        <hr>
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" onclick="calcularAmortizacion()">Calcular</button>
            <button type="button" class="btn btn-success" onclick="limpiarFormcalcularAmortizacion()">Limpiar</button>
            <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form7: `
    <h4>Calcula Tu IMC</h4>
    <form>
        <div class="col-md-3">
            <label class="form-label">Peso</label>
            <input type="number" id="pesoInput" name="pesoInput" class="form-control" placeholder="Ej: 80">
        </div>
        <div class="col-md-3">
            <label class="form-label">Altura(cm)</label>
            <input type="number" id="alturaInput" name="alturaInput" class="form-control" placeholder="Ej: 170">
        </div>
        <hr>
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" onclick="calculaIMC()">Calcular</button>
            <button type="button" class="btn btn-success" onclick="limpiarFormcalculaIMC()">Limpiar</button>
            <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form8: `
    <h4>Liquidación Integral</h4>
    <form>
        <div class="col-md-3">
            <label class="form-label">Salrio Minio Año Vigente</label>
            <input type="number" id="configSmmlv" name="configSmmlv" class="form-control" placeholder="Ej: 1750000">
        </div>
        <div class="col-md-3">
            <label class="form-label">Aux Transporte Año vigente</label>
            <input type="number" id="configAux" name="configAux" class="form-control" placeholder="Ej: 250000">
        </div>
        <hr>
        <div class="col-md-3">
            <label class="form-label">Salrio actual empleado</label>
            <input type="number" id="salarioInput" name="salarioInput" class="form-control" placeholder="Ej: 2000000">
        </div>
        <div class="col-md-3">
            <label class="form-label">Dias trabajados</label>
            <input type="number" id="diasInput" name="diasInput" class="form-control" placeholder="Ej: 360">
        </div>
        <hr>
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" onclick="calculaliquida()">Calcular</button>
            <button type="button" class="btn btn-success" onclick="limpiarFormcalculaliquida()">Limpiar</button>
            <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form9: `
    <h4>Liquidación Vacaciones</h4>
    <form>
        <div class="col-md-3">
            <label class="form-label">Salrio base</label>
            <input type="number" id="salarioVacInput" name="salarioVacInput" class="form-control" placeholder="Ej: 1750000">
        </div>
        <div class="col-md-3">
            <label class="form-label">Dias trabajados</label>
            <input type="number" id="diasVacInput" name="diasVacInput" class="form-control" placeholder="Ej: 360">
        </div>
        <hr>
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" onclick="calcularVacaciones()">Calcular</button>
            <button type="button" class="btn btn-success" onclick="limpiarFormcalcularVacaciones()">Limpiar</button>
            <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form10: `
    <h4>Calcula tu Incremento Salarial</h4>
    <form>
        <div class="col-md-3">
            <label class="form-label">Salrio Actual</label>
            <input type="number" id="salarioActualInput" name="salarioActualInput" class="form-control" placeholder="Ej: 1750000">
        </div>
        <div class="col-md-3">
            <label class="form-label">Porcentaje Incremento(%)</label>
            <input type="number" id="porcentajeInput" name="porcentajeInput" class="form-control" placeholder="Ej: 7.1">
        </div>
        <div class="col-md-3">
            <label class="form-label">Quincenas Atrasadas</label>
            <input type="number" id="quincenasInput" name="quincenasInput" class="form-control" placeholder="Ej: 3">
        </div>
        <hr>
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" onclick="calcularAumentoYRetroactivo()">Calcular</button>
            <button type="button" class="btn btn-success" onclick="limpiarFormcalcularAumentoYRetroactivo()">Limpiar</button>
            <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form11: `
    <h4>Calcula tus Horas Extras y Recargos</h4>
    <form id="formHorasExtras">
        <div class="row g-3">
            <div class="col-md-12">
                <label class="form-label fw-bold">Salario Mensual Base</label>
                <input type="number" id="salarioExtraInput" class="form-control" placeholder="Ej: 2000000">
                <div class="form-text">Usado para calcular el valor de la hora ordinaria (Salario / 240).</div>
            </div>

            <div class="col-md-4">
                <label class="form-label text-primary">Extra Diurna (HED)</label>
                <input type="number" id="hedInput" class="form-control" placeholder="0">
            </div>
            <div class="col-md-4">
                <label class="form-label text-primary">Extra Nocturna (HEN)</label>
                <input type="number" id="henInput" class="form-control" placeholder="0">
            </div>
            <div class="col-md-4">
                <label class="form-label text-primary">Recargo Nocturno (RN)</label>
                <input type="number" id="rnInput" class="form-control" placeholder="0">
            </div>

            <div class="col-md-4">
                <label class="form-label text-danger">Dominical/Festivo (DF)</label>
                <input type="number" id="dfInput" class="form-control" placeholder="0">
            </div>
            <div class="col-md-4">
                <label class="form-label text-danger">Extra Diu. Festiva (EDF)</label>
                <input type="number" id="edfInput" class="form-control" placeholder="0">
            </div>
            <div class="col-md-4">
                <label class="form-label text-danger">Extra Noc. Festiva (ENF)</label>
                <input type="number" id="enfInput" class="form-control" placeholder="0">
            </div>

            <hr>

            <div class="col-md-12">
                <button type="button" class="btn btn-primary" onclick="calcularHorasExtras()">Calcular Extras</button>
                <button type="button" class="btn btn-success" onclick="limpiarFormHorasExtras()">Limpiar</button>
                <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
            </div>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form12: `
    <h4>Calcula tus Intereses de Cesantías</h4>
    <form id="formInteresesCesantias">
        <div class="row g-3">
            <div class="col-md-4">
                <label class="form-label">Salario Base (con Aux. Transporte)</label>
                <input type="number" id="salarioBaseInteresInput" class="form-control" placeholder="Ej: 1500000">
            </div>
            <div class="col-md-4">
                <label class="form-label">Días Laborados</label>
                <input type="number" id="diasInteresInput" class="form-control" placeholder="Ej: 360">
            </div>
            <hr>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary" onclick="calcularInteresesCesantias()">Calcular Intereses</button>
                <button type="button" class="btn btn-success" onclick="limpiarFormIntereses()">Limpiar</button>
                <button type="button" class="btn btn-info" onclick="cancelar()">Cancelar</button>
            </div>
        </div>
    </form>
    <div id="data-result" class="mt-3"></div>
    `,

    form13: `
    <h4>Interpretación de Laboratorios (Referencia OMS)</h4>
    <form id="formLaboratorio">
        <div class="row g-3">
            <div class="col-md-12"><h6 class="text-primary border-bottom pb-1">Perfil Lipídico (mg/dL)</h6></div>
            <div class="col-md-3">
                <label class="small">Colesterol Total</label>
                <input type="number" id="colTotalInput" class="form-control" placeholder="Ej: 180">
            </div>
            <div class="col-md-3">
                <label class="small">LDL (Malo)</label>
                <input type="number" id="ldlInput" class="form-control" placeholder="Ej: 110">
            </div>
            <div class="col-md-3">
                <label class="small">HDL (Bueno)</label>
                <input type="number" id="hdlInput" class="form-control" placeholder="Ej: 50">
            </div>
            <div class="col-md-3">
                <label class="small">Triglicéridos</label>
                <input type="number" id="trigInput" class="form-control" placeholder="Ej: 140">
            </div>

            <div class="col-md-12 mt-4"><h6 class="text-primary border-bottom pb-1">Glicemia</h6></div>
            <div class="col-md-6">
                <label class="small">Glucosa Ayunas (mg/dL)</label>
                <input type="number" id="glucosaInput" class="form-control" placeholder="Ej: 95">
            </div>
            <div class="col-md-6">
                <label class="small">Hemoglobina Glicosilada - HbA1c (%)</label>
                <input type="number" step="0.1" id="hba1cInput" class="form-control" placeholder="Ej: 5.4">
            </div>

            <div class="col-md-12 mt-4"><h6 class="text-primary border-bottom pb-1">Función Renal</h6></div>
            <div class="col-md-6">
                <label class="small">Creatinina (mg/dL)</label>
                <input type="number" step="0.01" id="creatininaInput" class="form-control" placeholder="Ej: 0.9">
            </div>
            <div class="col-md-6">
                <label class="small">Nitrógeno Ureico - BUN (mg/dL)</label>
                <input type="number" id="bunInput" class="form-control" placeholder="Ej: 15">
            </div>

            <hr>
            <div class="col-12">
                <button type="button" class="btn btn-primary" onclick="analizarLaboratorio()">Analizar Exámenes</button>
                <button type="button" class="btn btn-success" onclick="limpiarFormLab()">Limpiar</button>
            </div>
        </div>
    </form>
    <div id="data-result" class="mt-4"></div>
    `,

};

document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const formKey = this.getAttribute("data-form");
        contenido.innerHTML = formularios[formKey];
    });
});

function cancelar()
{
    location.reload();
}

//--------------------------------------------------------------------------------------
// X por Mil
//--------------------------------------------------------------------------------------

function calcularXxX()
{
    const data = document.getElementById("data-result");
    let impuesto = parseFloat(document.getElementById("impuesto").value);
    let valbase = parseFloat(document.getElementById("valbase").value);
    let valtotal = parseFloat(document.getElementById("valtotal").value);

    if (isNaN(impuesto)) {
        data.innerHTML = `<div class="alert alert-danger">Debes ingresar el impuesto.</div>`;
        return;
    }
    // Si hay base → cálculo normal
    if (!isNaN(valbase)) 
    {
        let valorImpuesto = valbase * (impuesto / 1000);
        let total = valbase + valorImpuesto;
        mostrarResultado(valbase, valorImpuesto, total, impuesto);
        return;
    }

    // Si hay total → cálculo inverso
    if (!isNaN(valtotal)) 
    {
        let base = valtotal / (1 + (impuesto / 1000));
        let valorImpuesto = valtotal - base;
        mostrarResultado(base, valorImpuesto, valtotal, impuesto);
        return;
    }
    data.innerHTML = `<div class="alert alert-warning">Debes ingresar un valor base o un total.</div>`;
}

function mostrarResultado(base, impuestoValor, total, impuesto) 
{

    const data = document.getElementById("data-result");

    let baseF = base.toLocaleString('es-CO', { minimumFractionDigits: 0 });
    let impF = impuestoValor.toLocaleString('es-CO', { minimumFractionDigits: 0 });
    let totalF = total.toLocaleString('es-CO', { minimumFractionDigits: 0 });

    data.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body">
                <h5>Resultado</h5>
                <p><strong>Valor Base:</strong> ${baseF}</p>
                <p><strong>Impuesto (${impuesto} x mil):</strong> ${impF}</p>
                <p><strong>Total:</strong> ${totalF}</p>
            </div>
        </div>
    `;
}

function limpiarFormXporMil()
{
    document.getElementById("impuesto").value = "4";
    document.getElementById("valbase").value = "";
    document.getElementById("valtotal").value = "";
    document.getElementById("data-result").innerHTML = "";
}

//--------------------------------------------------------------------------------------
// Porcenajes Prestamos
//--------------------------------------------------------------------------------------
function calcularPorcentajeP()
{
    const data = document.getElementById("data-result");
    let valsolicita = parseFloat(document.getElementById("valsolicita").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);
    let tiempo = parseFloat(document.getElementById("tiempo").value);
    let error=""
    if(!isNaN(valsolicita)==""){error +=" Debes de ingresar un valor solicitado<br>";}
    if(!isNaN(porcentaje)==""){error +=" Debes de ingresar un porcentaje<br>";}
    if(!isNaN(tiempo)==""){error +=" Debes de ingresar un tiempo en meses<br>";} 
    if (error=="") 
    {
        let ValorInt = valsolicita * (porcentaje / 100);
        let ValorTotalIntexMes = ValorInt * tiempo;
        let ValorTotalMasInt = (valsolicita + ValorTotalIntexMes);

        let Valbasefinal = valsolicita.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let ValItenmes = ValorInt.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let ValTotalMasInt = ValorTotalMasInt.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let ValTotalIntxmes = ValorTotalIntexMes.toLocaleString('es-CO', { minimumFractionDigits: 0 });

        data.innerHTML = `
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5>Resultado</h5>
                    <p><strong>Valor Base Prestamo:</strong> ${Valbasefinal}</p>
                    <p><strong>Valor Interes Mensual:</strong> ${ValItenmes}</p>
                    <p><strong>Valor Total Interes x (${tiempo} Meses):</strong> ${ValTotalIntxmes}</p>
                    <p><strong>Total a Pagar:</strong> ${ValTotalMasInt}</p>
                </div>
            </div>
        `;
    }else
    {
        data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return;
    }
}

function limpiarFormPorcentajeP()
{
    document.getElementById("valsolicita").value = "";
    document.getElementById("porcentaje").value = "";
    document.getElementById("tiempo").value = "";
}

//--------------------------------------------------------------------------------------
// Descuentos
//--------------------------------------------------------------------------------------
function calcularDcto()
{
    const data = document.getElementById("data-result");
    let preciofull = parseFloat(document.getElementById("preciofull").value);
    let dcto = parseFloat(document.getElementById("dcto").value);
    let error=""
    if(!isNaN(preciofull)==""){error +=" Debes de ingresar un Precio Full<br>";}
    if(!isNaN(dcto)==""){error +=" Debes de ingresar un Dcto Aplicar<br>";}
    if (error=="") 
    {
        let descuento = preciofull * (dcto / 100);
        let preciofinaldcto = preciofull - descuento;
        let preciofullfinal = preciofull.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let dctofinal = descuento.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let preciofinal = preciofinaldcto.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        data.innerHTML = `
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5>Resultado</h5>
                    <p><strong>Valor Precio Full:</strong> ${preciofullfinal}</p>
                    <p><strong>Valor Dcto (${dcto} %):</strong> ${dctofinal}</p>
                    <p><strong>Total a Pagar:</strong> ${preciofinal}</p>
                </div>
            </div>
        `;
    }else
    {
        data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return;
    }
}

function limpiarFormDcto()
{
    document.getElementById("preciofull").value = "";
    document.getElementById("dcto").value = "";
    document.getElementById("data-result").innerHTML = "";
}

//--------------------------------------------------------------------------------------
// Agregar Porcentajes (%)
//--------------------------------------------------------------------------------------

function calcularAggporcentajes()
{
    const data = document.getElementById("data-result");
    let valoraplica = parseFloat(document.getElementById("valoraplica").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);
    let error=""
    if(!isNaN(valoraplica)==""){error +=" Debes de ingresar un Valor<br>";}
    if(!isNaN(porcentaje)==""){error +=" Debes de ingresar un Porcentaje Agregar<br>";}
    if (error=="") 
    {
        let porcentajeAgg = valoraplica * (porcentaje / 100);
        let valorfinalporcentaje = valoraplica + porcentajeAgg;

        let valorbasefinal = valoraplica.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let valorporcentajefinal = porcentajeAgg.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let valortotalfinal = valorfinalporcentaje.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        data.innerHTML = `
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5>Resultado</h5>
                    <p><strong>Valor Base:</strong> ${valorbasefinal}</p>
                    <p><strong>Valor Porcentaje Agregar (${porcentaje} %):</strong> ${valorporcentajefinal}</p>
                    <p><strong>Valor Total Final:</strong> ${valortotalfinal}</p>
                </div>
            </div>
        `;
    }else
    {
        data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return;
    }
}


function limpiarFormAggporcentajes()
{
    document.getElementById("valoraplica").value = "";
    document.getElementById("porcentaje").value = "";
    document.getElementById("data-result").innerHTML = "";
}

//--------------------------------------------------------------------------------------
// IVA 19(%)
//--------------------------------------------------------------------------------------

function calcularIVA()
{
    const data = document.getElementById("data-result");
    let valorbase = parseFloat(document.getElementById("valorbase").value);
    let iva = parseFloat(document.getElementById("iva").value);
    let error=""
    if(!isNaN(valorbase)==""){error +=" Debes de ingresar un Valor<br>";}
    if(!isNaN(iva)==""){error +=" Debes de ingresar un Porcentaje Agregar<br>";}
    if (error=="") 
    {
        let valoriva = valorbase * (iva / 100);
        let valorconiva = valorbase + valoriva;
        let valorsiniva = valorbase - valoriva;

        let valorbasefinal = valorbase.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let valorivafinal = valoriva.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let valorconivafinal = valorconiva.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        let valorsinivafinal = valorsiniva.toLocaleString('es-CO', { minimumFractionDigits: 0 });
        data.innerHTML = `
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5>Resultado</h5>
                    <p><strong>Valor Base:</strong> ${valorbasefinal}</p>
                    <p><strong>Valor IVA (${iva} %):</strong> ${valorivafinal}</p>
                    <p><strong>Valor con IVA:</strong> ${valorconivafinal}</p>
                    <p><strong>Valor sin IVA:</strong> ${valorsinivafinal}</p>
                </div>
            </div>
        `;
    }else
    {
        data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return;
    }
}


function limpiarFormIVA()
{
    document.getElementById("valorbase").value = "";
    document.getElementById("iva").value = "19";
    document.getElementById("data-result").innerHTML = "";
}

//-------------------------------------------------------------------------------------------------
// CALCULAR COMPRAS DIFEREIDAS
//-------------------------------------------------------------------------------------------------
function calcularAmortizacion() 
{
    const data = document.getElementById("data-result");
    const monto = parseFloat(document.getElementById("montoInput").value);
    const cuotas = parseInt(document.getElementById("cuotasInput").value);
    const interesMensual = parseFloat(document.getElementById("interesInput").value);
    let error=""
    if(!isNaN(monto)==""){error +=" Debes de ingresar un Monto o valor<br>";}
    if(!isNaN(cuotas)==""){error +=" Debes de ingresar un numero de cuotas<br>";}
    if(!isNaN(interesMensual)==""){error +=" Debes de ingresar un Porcentaje <br>";}
    if (error=="") 
    {
        const tasa = interesMensual / 100;
        let saldoPendiente = monto;
        let cuotaCapital = monto / cuotas; // Amortización constante
        let totalIntereses = 0;
        let filasTabla = "";

        for (let i = 1; i <= cuotas; i++) 
        {
            // Calculamos el interés sobre el saldo que queda
            let saldoPendiente = monto - (cuotaCapital * (i - 1));
            let interesMes = saldoPendiente * tasa;
            let pagoTotalMes = cuotaCapital + interesMes;
            totalIntereses += interesMes;

            // Vamos construyendo las filas de la tabla para el detalle
            filasTabla += `
                <tr>
                    <td>${i}</td>
                    <td>$${pagoTotalMes.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</td>
                    <td>$${interesMes.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</td>
                </tr>`;
        }
        const totalFinal = monto + totalIntereses;
        // // Renderizado en tu div "data-result"
        data.innerHTML = `
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title border-bottom pb-2">Resultado del Crédito</h5>
                    <div class="row">
                        <div class="col-6">
                            <p><strong>Compra Base:</strong> $${monto.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</p>
                            <p><strong>Total Intereses:</strong> $${totalIntereses.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</p>
                        </div>
                        <div class="col-6 text-end">
                            <p class="mb-0"><strong>Total a Pagar:</strong></p>
                            <h4 class="text-primary">$${totalFinal.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</h4>
                        </div>
                    </div>
                    
                    <hr>
                    <h6>Detalle de Cuotas</h6>
                    <table class="table table-sm table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cuota Total</th>
                                <th>Interés</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filasTabla}
                        </tbody>
                    </table>
                    <small class="text-muted">* Cálculo basado en amortización de capital constante.</small>
                </div>
            </div>
        `;
    }else
    {
         data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return;
    }
}

function limpiarFormcalcularAmortizacion()
{
    document.getElementById("montoInput").value = "";
    document.getElementById("cuotasInput").value = "";
    document.getElementById("interesInput").innerHTML = "";
}

//-------------------------------------------------------------------------------------------------
// CALCULAR IMC
//-------------------------------------------------------------------------------------------------
function calculaIMC()
{
    // Captura de datos (asumiendo que vienen de tus inputs)
    const data = document.getElementById("data-result");
    const peso = parseFloat(document.getElementById("pesoInput").value); // kg
    const alturaCm = parseFloat(document.getElementById("alturaInput").value); // cm (ej: 175)
    let error=""
    if(!isNaN(peso)==""){error +=" Debes de ingresar tu peso<br>";}
    if(!isNaN(alturaCm)==""){error +=" Debes de ingresar tu altura en CM<br>";}
    if (error=="") 
    {
        // Validación básica para evitar división por cero
        if (alturaCm > 0 && peso > 0) 
        {
            // Conversión interna: pasamos cm a metros
            const alturaMetros = alturaCm / 100;
            // Cálculo del IMC (Peso / Altura al cuadrado)
            const imc = peso / (alturaMetros * alturaMetros);
            let categoria = "";
            let colorClase = "";
            let recomendacion = "";
            // Clasificación de la OMS
            if (imc < 18.5) 
            {
                categoria = "Bajo peso";
                colorClase = "text-warning";
                recomendacion = "Considera aumentar la ingesta calórica con alimentos nutritivos.";
            } else if (imc >= 18.5 && imc <= 24.9) 
            {
                categoria = "Peso saludable";
                colorClase = "text-success";
                recomendacion = "¡Muy bien! Estás en el rango ideal para tu estatura.";
            } else if (imc >= 25 && imc <= 29.9) 
            {
                categoria = "Sobrepeso";
                colorClase = "text-warning";
                recomendacion = "Un poco de actividad cardiovascular te ayudaría a volver al rango ideal.";
            } else 
            {
                categoria = "Obesidad";
                colorClase = "text-danger";
                recomendacion = "Es aconsejable realizar un chequeo médico preventivo.";
            }

            // Renderizado en tu div "data-result"
            data.innerHTML = `
                <div class="card shadow-sm border-0">
                    <div class="card-body text-center">
                        <h5 class="text-muted mb-3">Tu Índice de Masa Corporal (IMC)</h5>
                        
                        <h1 class="display-3 fw-bold ${colorClase}">${imc.toFixed(1)}</h1>
                        <h4 class="mb-4">${categoria}</h4>
                        
                        <div class="alert alert-light border-0 shadow-sm py-3 mb-4">
                            <p class="mb-0"><strong>Recomendación:</strong> ${recomendacion}</p>
                        </div>

                        <div class="table-responsive">
                            <table class="table table-sm table-bordered mt-3">
                                <thead class="table-light">
                                    <tr>
                                        <th>Rango IMC</th>
                                        <th>Clasificación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="${imc < 18.5 ? 'table-warning' : ''}"><td>Bajo 18.5</td><td>Bajo peso</td></tr>
                                    <tr class="${imc >= 18.5 && imc <= 24.9 ? 'table-success' : ''}"><td>18.5 – 24.9</td><td>Normal</td></tr>
                                    <tr class="${imc >= 25 && imc <= 29.9 ? 'table-warning' : ''}"><td>25.0 – 29.9</td><td>Sobrepeso</td></tr>
                                    <tr class="${imc >= 30 ? 'table-danger' : ''}"><td>30.0 o más</td><td>Obesidad</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <hr>

                        <div class="mt-4">
                            <p class="small text-muted mb-2">Infografía de referencia (OMS)</p>
                            <img src="img/imc.png" 
                                alt="Rangos OMS IMC" 
                                class="img-fluid rounded shadow-sm" 
                                style="max-height: 300px;">
                        </div>

                        <div class="row text-muted mt-4">
                            <div class="col-6 text-start">
                                <p class="small mb-0">Peso: <strong>${peso} kg</strong></p>
                            </div>
                            <div class="col-6 text-end">
                                <p class="small mb-0">Estatura: <strong>${alturaCm} cm</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
             <small class="text-muted">* Este cálculo es referencial y no sustituye una evaluación médica profesional.</small>
            `;
        } else 
        {
            // Manejo de error si los datos son inválidos
            data.innerHTML = `<div class="alert alert-warning">¡Un momento!<br> Por favor, ingresa valores válidos para peso y altura.</div>`;
            return;
        }
    }
    else
    {
        data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return; 
    }
}

function limpiarFormcalculaIMC()
{
    document.getElementById("pesoInput").value = "";
    document.getElementById("alturaInput").value = "";
}

//-------------------------------------------------------------------------------------------------
// CALCULAR LIQUIDACION
//-------------------------------------------------------------------------------------------------

function calculaliquida()
{
    // Entradas
    const data = document.getElementById("data-result");
    // Captura de valores desde tus inputs de configuración
    const SMMLV_VIGENTE = parseFloat(document.getElementById("configSmmlv").value);
    const AUX_TRANSPORTE_VIGENTE = parseFloat(document.getElementById("configAux").value);

    // Datos del trabajador
    const salarioTrabajador = parseFloat(document.getElementById("salarioInput").value);
    const diasTrabajados = parseInt(document.getElementById("diasInput").value);
    let error=""
    if(!isNaN(SMMLV_VIGENTE)==""){error +=" Debes de ingresar la configuracion del salario minimo (SMMLV) del año en cusro a esta consulta, sin auxilio de transporte<br>";}
    if(!isNaN(AUX_TRANSPORTE_VIGENTE)==""){error +=" Debes de ingresar la configuracion del auxilio de transporte del año en cusro a esta consulta<br>";}
    if(!isNaN(salarioTrabajador)==""){error +=" Debes de ingresar tu salario actual<br>";}
    if(!isNaN(diasTrabajados)==""){error +=" Debes de ingresar los dias laborados<br>";}
    if (error=="") 
    {

        // VALIDACIÓN DINÁMICA: ¿Tiene derecho a auxilio de transporte?
        // La ley dice: hasta 2 SMMLV
        let auxilioEfectivo = 0;
        let mensajeAuxilio = "";
        if (salarioTrabajador <= (SMMLV_VIGENTE * 2)) {
            auxilioEfectivo = AUX_TRANSPORTE_VIGENTE;
            mensajeAuxilio = `<span class="text-success small">✓ Incluye Auxilio de Transporte</span>`;
        } else {
            auxilioEfectivo = 0;
            mensajeAuxilio = `<span class="text-danger small">✗ No aplica Auxilio (> 2 SMMLV)</span>`;
        }

        // Base para Prima y Cesantías
        const baseLiquidacion = salarioTrabajador + auxilioEfectivo;

        // Cálculos
        const prima = (baseLiquidacion * diasTrabajados) / 360;
        const cesantias = (baseLiquidacion * diasTrabajados) / 360;
        const intCesantias = (cesantias * diasTrabajados * 0.12) / 360;
        const total = prima + cesantias + intCesantias;

        // Renderizado con el feedback de la validación
        const data = document.getElementById("data-result");
        data.innerHTML = `
            <div class="card shadow-sm border-0">
                <div class="card-body">
                    <h5 class="text-primary mb-3">Resultado de Liquidación</h5>
                    
                    <div class="p-3 bg-light rounded mb-3">
                        <div class="d-flex justify-content-between">
                            <span>Salario Base:</span>
                            <strong>$${salarioTrabajador.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</strong>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Auxilio aplicado:</span>
                            <strong>$${auxilioEfectivo.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</strong>
                        </div>
                        <div class="text-end">
                            ${mensajeAuxilio}
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between text-primary">
                            <span><strong>Base de Cálculo:</strong></span>
                            <strong>$${baseLiquidacion.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</strong>
                        </div>
                    </div>

                    <table class="table table-sm">
                        <tbody>
                            <tr><td>Prima de Servicios</td><td class="text-end">$${prima.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</td></tr>
                            <tr><td>Cesantías</td><td class="text-end">$${cesantias.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</td></tr>
                            <tr><td>Int. Cesantías</td><td class="text-end">$${intCesantias.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</td></tr>
                            <tr class="table-active">
                                <th>TOTAL PRESTACIONES</th>
                                <th class="text-end">$${total.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</th>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mt-4">
                        <p class="small text-muted mb-2">Calculo aplicado</p>
                        <img src="img/calpriema.jpg" 
                            alt="Calculo aplicado prima" 
                            class="img-fluid rounded shadow-sm" 
                            style="max-height: 300px;">
                    </div>
                </div>
            </div>
            <small class="text-muted">* Este cálculo no incluye Vacaciones. las vacaciones no incluyen el auxilio de transporte en su base de cálculo, por lo que suelen calcularse aparte en el sub menu calcular vacaciones</small>
        `;
    }
    else
    {
        data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return; 
    }
}

function limpiarFormcalculaliquida()
{
    document.getElementById("salarioInput").value = "";
    document.getElementById("diasInput").value = "";
}

/**------------------------------------------------------------------------------------
 * Calcula las vacaciones y renderiza el resultado
--------------------------------------------------------------------------------------- */
function calcularVacaciones() 
{
    // 1. Captura de datos de tus inputs
    // Nota: Aquí solo usamos el Salario Base (sin auxilio de transporte)
    const data = document.getElementById("data-result");
    const salarioBase = parseFloat(document.getElementById("salarioVacInput").value);
    const diasTrabajados = parseInt(document.getElementById("diasVacInput").value);
    let error=""
    if(!isNaN(salarioBase)==""){error +=" Debes de ingresar tu salario actual<br>";}
    if(!isNaN(diasTrabajados)==""){error +=" Debes de ingresar los dias laborados<br>";}
    if (error=="") 
    {   
        // 2. Validación técnica
        if (isNaN(salarioBase) || isNaN(diasTrabajados) || diasTrabajados <= 0) {
            alert("Por favor, ingresa valores válidos.");
            data.innerHTML = `<div class="alert alert-warning">¡Un momento!<br> Por favor, ingresa valores válidos</div>`;
            return;
        }

        // 3. Cálculo legal (Divisor 720)
        const valorVacaciones = (salarioBase * diasTrabajados) / 720;

        // 4. Renderizado en tu div de resultados
        const data = document.getElementById("data-result");
        data.innerHTML = `
            <div class="card shadow-sm border-0 border-top border-5 border-warning">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="text-dark mb-0 font-weight-bold">Compensación de Vacaciones</h5>
                        <span class="badge rounded-pill bg-warning text-dark">Derecho Laboral</span>
                    </div>

                    <div class="text-center mb-4">
                        <p class="text-muted small mb-1">Monto a recibir</p>
                        <h2 class="display-4 fw-bold text-dark">$${valorVacaciones.toLocaleString('es-CO', { minimumFractionDigits: 2 })}</h2>
                        <p class="text-muted italic small">Por ${diasTrabajados} días laborados</p>
                    </div>

                    <div class="bg-light p-3 rounded-3 mb-4">
                        <h6 class="small fw-bold text-uppercase text-muted mb-3">Resumen de liquidación</h6>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Salario de referencia:</span>
                            <span class="fw-bold">$${salarioBase.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</span>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Días a liquidar:</span>
                            <span class="fw-bold">${diasTrabajados} días</span>
                        </div>
                        <div class="d-flex justify-content-between text-success">
                            <span>Días de descanso equivalentes:</span>
                            <span class="fw-bold">${((diasTrabajados * 15) / 360).toFixed(1)} días</span>
                        </div>
                    </div>

                    <div class="alert alert-warning border-0 shadow-sm d-flex align-items-center">
                        <div class="me-2">
                            <i class="bi bi-exclamation-triangle-fill"></i>
                        </div>
                        <div class="small">
                            <strong>Importante:</strong> Para el cálculo de vacaciones <strong>no se incluye</strong> el auxilio de transporte (Art. 192 del CST).
                        </div>
                    </div>

                    <div class="mt-4">
                        <p class="small text-center text-muted">Referencia de tiempos de descanso</p>
                        
                    </div>
                    <div class="mt-4">
                        <p class="small text-muted mb-2">Calculo aplicado</p>
                        <img src="img/calvacaciones.jpg" 
                            alt="Calculo vacaciones" 
                            class="img-fluid rounded shadow-sm" 
                            style="max-height: 300px;">
                    </div>
                </div>
                <div class="card-footer bg-transparent border-0 pb-3">
                    <button class="btn btn-outline-secondary btn-sm w-100" onclick="window.print()">
                        <i class="bi bi-printer"></i> Descargar Reporte
                    </button>
                </div>
            </div>
        `;
    }
    else
    {
        data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return; 
    }
}

function limpiarFormcalcularVacaciones()
{
    document.getElementById("salarioVacInput").value = "";
    document.getElementById("diasVacInput").value = "";
}

//-------------------------------------------------------------------------------------------------
// CALCULAR INCREMENTYO SALARIAL
//-------------------------------------------------------------------------------------------------
function calcularAumentoYRetroactivo() {
    // 1. Captura de datos
    // 1.2 Renderizado
    const data = document.getElementById("data-result");
    const salarioActual = parseFloat(document.getElementById("salarioActualInput").value);
    const porcentajeAumento = parseFloat(document.getElementById("porcentajeInput").value);
    const quincenasAtrasadas = parseInt(document.getElementById("quincenasInput").value);
    let error=""
    if(!isNaN(salarioActual)==""){error +=" Debes de ingresar tu salario actual<br>";}
    if(!isNaN(porcentajeAumento)==""){error +=" Debes de ingresar el porcentaje a incrementar<br>";}
    if (error=="") 
    {   
        // 2. Cálculos de Aumento
        const aumentoDecimal = porcentajeAumento / 100;
        const valorAumentoMensual = salarioActual * aumentoDecimal; // ESTO ES LO QUE FALTABA
        const nuevoSalarioBruto = salarioActual + valorAumentoMensual;
        
        // 3. Cálculo de Retroactivo
        const diferenciaQuincenal = valorAumentoMensual / 2;
        const totalRetroactivoBruto = diferenciaQuincenal * quincenasAtrasadas;

        // 4. Descuentos de Ley (8% total: 4% Salud + 4% Pensión)
        const salud = nuevoSalarioBruto * 0.04;
        const pension = nuevoSalarioBruto * 0.04;
        const nuevoSalarioNetoMensual = nuevoSalarioBruto - salud - pension;
        const nuevoSalarioNetoQuincenal = nuevoSalarioNetoMensual / 2;


        data.innerHTML = `
            <div class="card shadow-sm border-0 border-start border-5 border-success">
                <div class="card-body">
                    <h5 class="text-success mb-4"><i class="bi bi-cash-stack"></i> Análisis de Incremento Salarial</h5>
                    
                    <div class="row g-3 mb-4 text-center">
                        <div class="col-md-4">
                            <div class="p-2 bg-light rounded shadow-sm border">
                                <small class="text-muted d-block">Nuevo Salario Bruto</small>
                                <h4 class="mb-0 text-dark">$${nuevoSalarioBruto.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</h4>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-2 bg-success text-white rounded shadow-sm">
                                <small class="d-block">Aumento Mensual</small>
                                <h4 class="mb-0">+$${valorAumentoMensual.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</h4>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-2 bg-primary text-white rounded shadow-sm">
                                <small class="d-block">Total Retroactivo</small>
                                <h4 class="mb-0">$${totalRetroactivoBruto.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</h4>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-7">
                            <h6 class="border-bottom pb-2">Desglose de la Nueva Quincena</h6>
                            <table class="table table-sm table-borderless">
                                <tr>
                                    <td>Salario Bruto (15 días)</td>
                                    <td class="text-end">$${(nuevoSalarioBruto / 2).toLocaleString('es-CO', { minimumFractionDigits: 0 })}</td>
                                </tr>
                                <tr class="text-danger">
                                    <td>Salud (4%)</td>
                                    <td class="text-end">-$${(salud / 2).toLocaleString('es-CO', { minimumFractionDigits: 0 })}</td>
                                </tr>
                                <tr class="text-danger">
                                    <td>Pensión (4%)</td>
                                    <td class="text-end">-$${(pension / 2).toLocaleString('es-CO', { minimumFractionDigits: 0 })}</td>
                                </tr>
                                <tr class="table-light border-top">
                                    <th class="text-primary">PAGO NETO A RECIBIR</th>
                                    <th class="text-end text-primary text-decoration-underline">$${nuevoSalarioNetoQuincenal.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</th>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="col-md-5">
                            <div class="p-3 border rounded h-100 bg-light">
                                <h6>Datos de referencia:</h6>
                                <ul class="list-unstyled small mb-0">
                                    <li><strong>Salario Anterior:</strong> $${salarioActual.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</li>
                                    <li><strong>Porcentaje aplicado:</strong> ${porcentajeAumento}%</li>
                                    <li><strong>Quincenas a pagar:</strong> ${quincenasAtrasadas}</li>
                                </ul>
                                <div class="mt-3">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="alert alert-secondary mt-3 mb-0 py-2">
                        <small><i class="bi bi-info-circle"></i> El valor neto es un estimado. Recuerda que si el salario supera los 4 SMMLV, se debe aplicar el 1% adicional del Fondo de Solidaridad Pensional.</small>
                    </div>
                </div>
            </div>
        `;
    }
    else
    {
        data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br> ${error}</div>`;
        return; 
    }
}

function limpiarFormcalcularAumentoYRetroactivo()
{
    document.getElementById("salarioActualInput").value = "";
    document.getElementById("porcentajeInput").value = "";
    document.getElementById("quincenasInput").value = "";
}

//-------------------------------------------------------------------------------------------------
// CALCULAR HORAS EXTRAS
//-------------------------------------------------------------------------------------------------

function calcularHorasExtras() {
    const salario = parseFloat(document.getElementById("salarioExtraInput").value);
    // Renderizado en el dashboard
    const data = document.getElementById("data-result");
    // Captura de horas
    const inputs = {
        hed: { nombre: "Extra Diurna", cant: parseFloat(document.getElementById("hedInput").value) || 0, factor: 1.25 },
        hen: { nombre: "Extra Nocturna", cant: parseFloat(document.getElementById("henInput").value) || 0, factor: 1.75 },
        rn:  { nombre: "Recargo Nocturno", cant: parseFloat(document.getElementById("rnInput").value) || 0, factor: 0.35 },
        df:  { nombre: "Dominical/Festivo", cant: parseFloat(document.getElementById("dfInput").value) || 0, factor: 1.75 },
        edf: { nombre: "Extra Diurna Festiva", cant: parseFloat(document.getElementById("edfInput").value) || 0, factor: 2.00 },
        enf: { nombre: "Extra Nocturna Festiva", cant: parseFloat(document.getElementById("enfInput").value) || 0, factor: 2.50 }
    };

    const horaOrdinaria = salario / 240;
    let totalExtras = 0;
    let filasTabla = "";
    let datosExportar = { 
        fecha: new Date().toISOString(),
        salarioBase: salario,
        valorHoraOrdinaria: horaOrdinaria,
        detalles: [],
        totalPagar: 0 
    };

    // Procesar cálculos y armar tabla dinámica
    for (const key in inputs) {
        if (inputs[key].cant > 0) {
            const valorCalculado = horaOrdinaria * inputs[key].factor * inputs[key].cant;
            totalExtras += valorCalculado;
            
            filasTabla += `<tr><td>${inputs[key].nombre}</td><td class="text-center">${inputs[key].cant}</td><td class="text-end">$${valorCalculado.toLocaleString()}</td></tr>`;
            
            datosExportar.detalles.push({
                tipo: inputs[key].nombre,
                cantidad: inputs[key].cant,
                factor: inputs[key].factor,
                subtotal: valorCalculado
            });
        }
    }
    datosExportar.totalPagar = totalExtras;
    data.innerHTML = `
        <div class="card shadow-sm border-0">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h5 class="text-primary mb-0 fw-bold">Liquidación de Recargos</h5>
                    <button class="btn btn-sm btn-outline-primary" onclick="descargarJSON(${JSON.stringify(datosExportar).replace(/"/g, '&quot;')})">
                        <i class="bi bi-download"></i> Exportar JSON
                    </button>
                </div>

                <div class="text-center mb-4 p-3 bg-light rounded border">
                    <p class="text-muted small mb-0">Total Recargos y Extras</p>
                    <h2 class="display-5 fw-bold text-dark">$${totalExtras.toLocaleString()}</h2>
                </div>

                <div class="table-responsive mb-4">
                    <table class="table table-sm table-hover">
                        <thead class="table-secondary">
                            <tr>
                                <th>Concepto</th><th class="text-center">Hrs</th><th class="text-end">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filasTabla || '<tr><td colspan="3" class="text-center text-muted">No hay horas registradas</td></tr>'}
                        </tbody>
                    </table>
                </div>

                <div class="mt-4 p-3 border rounded bg-white">
                    <h6 class="text-muted small fw-bold mb-3 text-uppercase">Tabla de Referencia CST</h6>
                    <table class="table table-bordered table-sm mb-0 text-center" style="font-size: 0.8rem;">
                        <thead class="table-dark">
                            <tr><th>Tipo</th><th>Recargo</th><th>Factor</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Extra Diurna</td><td>25%</td><td>1.25</td></tr>
                            <tr><td>Extra Nocturna</td><td>75%</td><td>1.75</td></tr>
                            <tr><td>Recargo Nocturno</td><td>35%</td><td>0.35</td></tr>
                            <tr><td>Dom/Festivo</td><td>75%</td><td>1.75</td></tr>
                            <tr><td>Ext. Diu. Festiva</td><td>100%</td><td>2.00</td></tr>
                            <tr><td>Ext. Noc. Festiva</td><td>150%</td><td>2.50</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function limpiarFormHorasExtras() {
    // Resetea el formulario por su ID
    document.getElementById("formHorasExtras").reset();
    // Limpia el div de resultados
    document.getElementById("data-result").innerHTML = "";
}

// Función auxiliar para descargar el archivo (Pura lógica de Dev)
function descargarJSON(obj) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "calculo_extras.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

//-------------------------------------------------------------------------------------------------
// CALCULAR INT SOBRE LAS CES
//-------------------------------------------------------------------------------------------------

function calcularInteresesCesantias() 
{
        // 3. Renderizado
    const data = document.getElementById("data-result");
    // 1. Captura de datos
    const base = parseFloat(document.getElementById("salarioBaseInteresInput").value);
    const dias = parseInt(document.getElementById("diasInteresInput").value);

    if (isNaN(base) || isNaN(dias)) {
         data.innerHTML = `<div class="alert alert-danger">¡Un momento!<br>Por favor completa los campos.</div>`;
        return; 
    }

    // 2. Cálculos: Primero calculamos la cesantía teórica para ese periodo
    const valorCesantias = (base * dias) / 360;
    const valorIntereses = (valorCesantias * dias * 0.12) / 360;


    data.innerHTML = `
        <div class="card shadow-sm border-0 border-top border-5 border-primary">
            <div class="card-body">
                <h5 class="text-primary mb-3">Resultado de Intereses de Cesantías</h5>
                
                <div class="alert alert-primary text-center py-4">
                    <p class="mb-1 text-uppercase small">Valor de los Intereses</p>
                    <h1 class="display-4 fw-bold">$${valorIntereses.toLocaleString()}</h1>
                </div>

                <div class="p-3 bg-light rounded mb-4">
                    <h6 class="fw-bold border-bottom pb-2">Explicación Matemática</h6>
                    <p class="small mb-2"><strong>Fórmula:</strong> (Cesantías × Días × 0.12) / 360</p>
                    <div class="small">
                        1. Cesantías estimadas: <strong>$${valorCesantias.toLocaleString()}</strong><br>
                        2. Tasa de interés: <strong>12% anual (0.12)</strong><br>
                        3. Días aplicados: <strong>${dias} días</strong>
                    </div>
                </div>

                <div class="mt-3">
                    <p class="small text-muted italic">
                        <i class="bi bi-info-circle"></i> <strong>Dato legal:</strong> 
                        Los intereses se deben pagar directamente al trabajador a más tardar el 31 de enero de cada año o al finalizar el contrato.
                    </p>
                </div>
            </div>
        </div>
    `;
}

function limpiarFormIntereses() 
{
    document.getElementById("formInteresesCesantias").reset();
    document.getElementById("data-result").innerHTML = "";
}

//-------------------------------------------------------------------------------------------------
// INTERPEETA TUS LABORATORIOS
//-------------------------------------------------------------------------------------------------

function analizarLaboratorio() {
    const data = document.getElementById("data-result");
    const val = {
        colTotal: parseFloat(document.getElementById("colTotalInput").value),
        ldl: parseFloat(document.getElementById("ldlInput").value),
        hdl: parseFloat(document.getElementById("hdlInput").value),
        trig: parseFloat(document.getElementById("trigInput").value),
        glucosa: parseFloat(document.getElementById("glucosaInput").value),
        hba1c: parseFloat(document.getElementById("hba1cInput").value),
        creatinina: parseFloat(document.getElementById("creatininaInput").value),
        bun: parseFloat(document.getElementById("bunInput").value)
    };

    let filas = "";

    const evaluar = (nombre, valor, rangos) => {
        if (isNaN(valor)) return "";
        let estado = "Normal";
        let clase = "text-success";

        // Lógica de evaluación simplificada según estándares comunes
        if (valor > rangos.alto) { 
            estado = "Alto / Riesgo"; clase = "text-danger fw-bold"; 
        } else if (valor < rangos.bajo) { 
            estado = "Bajo"; clase = "text-warning fw-bold"; 
        }
        
        // Excepción para HDL (Donde bajo es malo)
        if (nombre === "HDL (Bueno)" && valor < 40) {
            estado = "Riesgo (Bajo)"; clase = "text-danger fw-bold";
        }

        return `<tr>
            <td>${nombre}</td>
            <td>${valor}</td>
            <td>${rangos.ref}</td>
            <td class="${clase}">${estado}</td>
        </tr>`;
    };

    // Definición de rangos (Referencias generales OMS/ADA)
    filas += evaluar("Colesterol Total", val.colTotal, { alto: 200, bajo: 0, ref: "< 200 mg/dL" });
    filas += evaluar("LDL (Malo)", val.ldl, { alto: 130, bajo: 0, ref: "< 130 mg/dL" });
    filas += evaluar("HDL (Bueno)", val.hdl, { alto: 1000, bajo: 40, ref: "> 40 mg/dL" });
    filas += evaluar("Triglicéridos", val.trig, { alto: 150, bajo: 0, ref: "< 150 mg/dL" });
    filas += evaluar("Glucosa Ayunas", val.glucosa, { alto: 100, bajo: 70, ref: "70 - 100 mg/dL" });
    filas += evaluar("HbA1c (%)", val.hba1c, { alto: 5.7, bajo: 0, ref: "< 5.7%" });
    filas += evaluar("Creatinina", val.creatinina, { alto: 1.3, bajo: 0.6, ref: "0.6 - 1.3 mg/dL" });
    filas += evaluar("BUN", val.bun, { alto: 20, bajo: 7, ref: "7 - 20 mg/dL" });


    data.innerHTML = `
        <div class="card shadow-sm border-0">
            <div class="card-body">
                <h5 class="card-title text-primary mb-3">Interpretación de Resultados</h5>
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                                <th>Examen</th>
                                <th>Tu Valor</th>
                                <th>Rango Ref.</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>${filas}</tbody>
                    </table>
                </div>

                <div class="alert alert-warning mt-3 border-0 shadow-sm">
                    <div class="d-flex">
                        <div class="me-3"><h4 class="mb-0">⚠️</h4></div>
                        <div>
                            <strong>Nota Médica Obligatoria:</strong>
                            <p class="small mb-0">Esta tabla es una guía informativa basada en rangos generales. Los resultados deben ser interpretados <strong>exclusivamente por un médico profesional</strong>, quien evaluará tu historial clínico, edad y otros factores de riesgo. No realices cambios en tu medicación o dieta basándote solo en esta herramienta.</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-4 text-center">
                    
                </div>
            </div>
        </div>
    `;
}

function limpiarFormLab() {
    document.getElementById("formLaboratorio").reset();
    document.getElementById("data-result").innerHTML = "";
}