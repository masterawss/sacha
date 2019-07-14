// import something here
import * as VueGoogleMaps from 'vue2-google-maps'
// "async" is optional
export default async ({ Vue /* app, router, Vue, ... */ }) => {
  // something to do
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCI5dqm_WOlOxpwaKtW-1NzqlNZrq8ctv0',
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)
   
      //// If you want to set the version, you can do so:
      // v: '3.26',
    },
   
    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,
   
    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
  })
}

export const styles = [
  [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
],

[
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#8e8e8e"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#7f7f7f"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#bebebe"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#cbcbcb"
          },
          {
              "weight": "0.69"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ffffff"
          },
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.government",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.medical",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#98da9f"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.school",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "-100"
          },
          {
              "lightness": "50"
          },
          {
              "gamma": "1"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#e4e4e4"
          },
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#f2f2f2"
          },
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#e4e4e4"
          },
          {
              "lightness": "0"
          },
          {
              "gamma": "1"
          },
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "labels",
      "stylers": [
          {
              "hue": "#ff0000"
          },
          {
              "saturation": "-100"
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#cbcbcb"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#f3f3f3"
          },
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  }
],


[
  {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#eafafd"
          }
      ]
  },
  {
      "featureType": "landscape.natural.landcover",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#b5fc68"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "landscape.natural.terrain",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#c1ff57"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "hue": "#1900ff"
          },
          {
              "color": "#c0e8e8"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#d4f77d"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 100
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "lightness": 700
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#7dcdcd"
          }
      ]
  }
],



[
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "336d75"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fd7864"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#6bb1e1"
            }
        ]
    }
]

]