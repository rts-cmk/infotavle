export default function Pauser() {

    return (
        <>
        <h1 className="slide__title text-5xl text-center mb-8">Pauser</h1>
        <section className="slide__pauser">

        <ul className="slide__descript mt-4">
            <span>
                <li className="pause__time">Første pause er kl. 9.40</li>
                <li className="pause__time">Frokostpausen er kl. 11.30</li>
            </span>
        </ul>
         <img
                  className="mappy"
                  src="./map.svg"
                  alt="map of canteen and more"
                />
        </section>
        </>
    )
}