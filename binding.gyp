{
  "targets": [
    {
      "target_name": "electron-wallpaper",
      "sources": [
        "src/bindings.cc"
      ],
      "conditions": [
        [
          "OS==\"win\"",
          {
            "sources": ["src/electronwallpaper_win.cc"]
          }
        ],
        [
          "OS!=\"win\"",
          {
            "sources": ["src/electronwallpaper_noop.cc"]
          }
        ]
      ]
    }
  ]
}
