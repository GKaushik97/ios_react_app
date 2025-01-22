import PropsExample from "./PropsExample";
export default function Home() {
    const cars = ['BMW', 'BENZ', 'AUDI'];
    return (
        <div>
            {cars.map((car, index) => <PropsExample key={index} brand={car} />)}
        </div>
    )
}