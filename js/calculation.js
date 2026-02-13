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