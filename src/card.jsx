import "./card.css";

export const Card = () => {

  return (
    <>
      <div id="kt_content_container" className="container-xxl">
        <div className="row">
          <div className="col">
            <div className="card card-xl-stretch">
              <div className="card-header border-0 bg-danger py-5">
                <h3 className="card-title fw-bolder text-white">Empleados</h3>

                <div className="card-toolbar">
                  <select name="status" data-control="select2" data-hide-search="true" className="form-select bg-active-danger text-active-inverse-danger active">
                    <option value="1" selected="selected">Exportar</option>
                    <option value="2">90 Days</option>
                    <option value="3">6 Months</option>
                    <option value="4">1 Year</option>
                  </select>
                </div>

              </div>
              <div className="card-body p-0">
                <div
                  className="mixed-widget-2-chart card-rounded-bottom bg-danger"
                  data-kt-color="danger"
                  style={{ height: 200 }}
                />
                
                <div className="card-p custom-mt-n13 position-relative">

                  <div className="d-flex justify-content-end row g-0">

                    <div className="col-3 bg-light-primary px-6 py-8 rounded-2 mb-7 center-hr">
                      <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2"><svg xmlns="http://www.w3.org/2000/svg" width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none">
                        <path d="M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z" fill="currentColor" />
                        <rect opacity="0.3" x="14" y="4" width="4" height="4" rx="2" fill="currentColor" />
                        <path d="M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z" fill="currentColor" />
                        <rect opacity="0.3" x="6" y="5" width="6" height="6" rx="3" fill="currentColor" />
                      </svg></span>
                      <a href="#" className="text-primary fw-bold fs-6">
                        Empleados MDP
                      </a>
                    </div>

                  </div>
                  <h3 class="card-title flex-column">
                    <span class="fw-bolder mb-2 text-dark">100</span> <br />
                    <span class="text-muted fw-bold fs-7">Empleados registrados</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="kt_content_container" className="container-xxl">
        <div className="row">
          <div className="col">
            <div className="card card-xl-stretch">
              <div className="card-header border-0 bg-blue py-5">
                <h3 className="card-title fw-bolder text-white">Usuarios</h3>

                <div className="card-toolbar">
                  <select name="status" data-control="select2" data-hide-search="true" className="form-select bg-active-primary text-active-inverse-primary active">
                    <option value="1" selected="selected">Exportar</option>
                    <option value="2">90 Days</option>
                    <option value="3">6 Months</option>
                    <option value="4">1 Year</option>
                  </select>
                </div>

              </div>
              <div className="card-body p-0">
                <div
                  className="mixed-widget-2-chart card-rounded-bottom bg-blue"
                  data-kt-color="danger"
                  style={{ height: 200 }}
                />
                <div className="card-p custom-mt-n13 position-relative">

                  <div className="d-flex justify-content-end row g-0">

                    <div className="col-3 bg-light-primary px-6 py-8 rounded-2 mb-7 center-hr">
                      <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                      </span>
                      <a href="#" className="text-primary fw-bold fs-6">
                        Usuarios MDP
                      </a>
                    </div>

                  </div>
                  <h3 class="card-title flex-column">
                    <span class="fw-bolder mb-2 text-dark">5</span> <br />
                    <span class="text-muted fw-bold fs-7">Usuarios registrados</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
