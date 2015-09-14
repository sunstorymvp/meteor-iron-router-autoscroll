Iron.Router.plugins.autoscroll = (router, options) ->
  unless Meteor.isClient then return

  lastPath = null
  popstate = null

  window.addEventListener 'popstate', (e) -> popstate = true

  router.onAfterAction _.debounce(->
    currentPath = @route.path(@route.params)

    if popstate
      popstate = false
    else if currentPath != lastPath
      $('html, body').animate { scrollTop: 0 }, 200

    lastPath = currentPath
  , 200), options
