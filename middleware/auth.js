export default function({ store, route, redirect }) {
  if (route.fullPath !== '/' && !store.getters['auth/loggedIn']) {
    return redirect('/')
  }

  if (route.fullPath === '/' && store.getters['auth/loggedIn']) {
    return redirect('/jobs')
  }
}
