enum Resource {
    KOR, 
    JPN,
    CHN
}

const flags = <T extends Resource>(country: T) => {
    console.log(country)
}

flags(Resource.KOR)
flags(Resource.JPN)
flags(Resource.CHN)