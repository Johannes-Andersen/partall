[![Test & Deploy](https://github.com/Johannes-Andersen/partall/actions/workflows/test-and-deploy.yml/badge.svg?branch=main)](https://github.com/Johannes-Andersen/partall/actions/workflows/test-and-deploy.yml)

# Partall filter lists

This is a filter list specifically made for <a href="https://github.com/gorhill/uBlock">uBlock Origin (uBO)</a>
and is intended for my personal use. But you are more than welcome to use it as well.

## I have found an issue!

If you have found an issue with the list, please open an issue on GitHub.

You can do that here: https://github.com/Johannes-Andersen/partall/issues/new/choose

## Disclaimer

<strong>I have only validated the list on the latest version of Firefox and uBO.</strong>

The list will most likely work on other browsers and content blockers, but I can't guarantee it. I do my best to keep it working for all browsers and adblockers, but I can't test them all. So, if you find any issues, please open a GitHub issue.

## Available filter lists

| Name       | Link                                   | Mirror                                                                                      |
| ---------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| Ads        | https://list.partall.no/ads.txt        | [GitHub](https://raw.githubusercontent.com/Johannes-Andersen/partall/deploy/ads.txt)        |
| Tracking   | https://list.partall.no/tracking.txt   | [GitHub](https://raw.githubusercontent.com/Johannes-Andersen/partall/deploy/tracking.txt)   |
| Annoyances | https://list.partall.no/annoyances.txt | [GitHub](https://raw.githubusercontent.com/Johannes-Andersen/partall/deploy/annoyances.txt) |

### Policy

The list is a pretty close resemblance to the [adguard filter policy](https://adguard.com/kb/general/ad-filtering/filter-policy).
But there are some minor differences.

> [!IMPORTANT]  
> None of the lists are meant to be used as a standalone list. They are meant to be used in combination with other, more general lists.
>
> I also do not deal with NSFW websites. Instead, report them to the appropriate filter list maintainer.

#### **Ads**

- The filter list should block ads wherever possible.
- Ads should be blocked regardless of their reasons and goals.

_Limitations and Exceptions_

If a rule is subject to the list of limitations described below, it will not be added to the main filters.

- Ads injected by malware or malicious extensions are not in the scope of this filter list.
- Websites' own ads should not be added to the ad list, but to the annoyances list. However, they should not be unblocked if doing so may cause third-party ads to reappear.
- Anti-adblock scripts will be blocked if they limit or affect the functionality of a website. Otherwise, they will be added to the annoyances list.

#### **Tracking**

- This filter will block all trackers that collect user personal, behaviour or device data.
- This includes trackers that claim only to collect anonymous data.

#### **Annoyances**

- This filter list should block all elements that are considered annoying.
- Examples include anti-adblock, cookie notices, third-party widgets, in-page pop-ups, email subscription forms, banners with special offers, and aggressively placed social media widgets.

## Contributing

If you want to contribute to the list, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE](LICENSE) file for details.

## Background

Over the years, I have used many different ad blockers and filter lists. However, my personal filter list has grown to the point where it is hard to maintain across devices and browsers. I, therefore, decided to make this list public so others could use it.

The list is mainly for my own use, but I will try to include rules that are useful for others as well.

## Acknowledgments

- [uBlock Origin](https://github.com/gorhill/uBlock) - for creating my chosen adblocker.
- [AdGuard](https://adguard.com/) - for fantastic documentation and tools like aglint.
- [DandelionSprout](https://github.com/DandelionSprout/adfilt) - for being my go-to list for years.
