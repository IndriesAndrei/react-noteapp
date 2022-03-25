export default function Header({listCount}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Note App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className="col-md-8 offset-2 mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="position-relative">
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <b>Total Notes: {listCount}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}