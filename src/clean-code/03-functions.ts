;(() => {
  interface Actor {
    birthDate: Date
    fullName: string
  }

  interface Movie {
    cast: Actor[]
    description: string
    id: number
    rating: number
    title: string
  }

  function getMovieById(id: string) {
    console.log({ id })
  }

  function getMovieCastById(id: string) {
    console.log({ id })
  }

  function getActorBioById(id: string) {
    console.log({ id })
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast })
  }

  function checkUserName(fullName: string) {
    console.log({ fullName })
    return true
  }

  function createActor(actor: Actor): boolean {
    const { fullName } = actor

    if (!checkUserName(fullName)) return false

    console.log('Crear actor')
    return true
  }
})()
