export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex overflow-y-auto flex-col px-2 py-3 bg-slate-100 rounded-t-md rounded-b-md h-110 ">
            <div className="overflow-x-auto">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <div className="space-y-200">
                    <p className="text-gray-600">Id: {nft.id.tokenId}</p>
                </div>
                <div className="gap-y-200">
                    <p className="gap-y-5 text-gray-600"> Contract Address: {nft.contract.address}</p>
                </div>
            </div>

            <div className="flex-grow mt-2 overflow-y-auto">
                <p className="text-gray-600">{nft.description}</p>
            </div>
            <div className="flex justify-center ab-1">
                    <a target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} className="py-2 px-4 bg-blue-100 rounded-md text-center text-gray-600 cursor-pointer">View on Etherscan</a>
            </div>
        </div>

    </div>
    )
}