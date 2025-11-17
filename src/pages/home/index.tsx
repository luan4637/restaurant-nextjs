import TopContent from "./partials/topContent"
import BestSeller from "./partials/bestSeller"
import OrientalTaste from "./partials/orientalTaste"
import Statistics from "./partials/statistics"
import ChickenGrill from "./partials/ChickenGrill"
import Signature from "./partials/signature"
import Subscribe from "./partials/Subscribe"

export default function HomePage() {
    return (
        <div>
            <TopContent />
            <BestSeller />
            <OrientalTaste />
            <Statistics />
            <ChickenGrill />
            <Signature />
            <Subscribe />
        </div>
    )
}