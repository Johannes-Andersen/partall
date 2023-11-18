[![Test](https://github.com/Johannes-Andersen/partall/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/Johannes-Andersen/partall/actions/workflows/test.yml)

# Partall filter lists

This is a filter list specifically made for <a href="https://github.com/gorhill/uBlock">uBlock Origin (uBO)</a>
and is mainly aimed at Norwegian users and websites.

## I have found an issue!

If you have found an issue with the list, please open an issue on GitHub.

You can do that here: https://github.com/Johannes-Andersen/partall/issues/new/choose

## Disclaimer

<strong>I have only validated the list on the latest version of Firefox and uBO.</strong>

It is most likely that the list will work on other browsers and content blockers, but I can't guarantee it. I do my best to keep it working for all browsers and adblockers, but I can't test them all. So if you find any issues, please open an GitHub issue.

## Available filter lists

| Name                   | Link | Mirror |
| ---------------------- | ---- | ------ |
| Norwegian – Ads        |      |        |
| Norwegian – Tracking   |      |        |
| Norwegian – Annoyances |      |        |

### Policy

The lists are a pretty close resemblance of the [adguard filter policy](https://adguard.com/kb/general/ad-filtering/filter-policy).
But there are some minor differences.

> [!IMPORTANT]  
> None of the lists are meant to be used as a standalone list. They are meant to be used in combination with other more general lists.
>
> We therefore also **do not** deal with any NSFW websites. Report them to the appropriate filter list maintainer instead.

#### **Norwegian – Ads**

- The filter list should block ads wherever possible.
- Ads should be blocked regardless of their reasons and goals.

_Limitations and Exceptions_

If a rule is subject to the list of limitations described below, then it won’t be added to the main filters.

- Ads injected by malware or malicious extensions is not in the scope of this filter list.
- Websites’ own ads should not be added to the ad list, but instead to the annoyances list. However, they should not be unblocked if it may cause third-party ads to reappear.
- Anti-adblock scripts will be blocked only if they limit or affect the functionality of a website. Otherwise, they will be added to the annoyances list.

#### **Norwegian – Tracking**

- This filter will block all trackers that collect user personal, behavior or device data.
- This includes trackers that claim to only collect anonymous data.

#### **Norwegian – Annoyances**

- This filter list should block all elements that are considered annoying.
- Examples include; anti-adblock, cookie notices, third-party widgets, in-page pop-ups, email subscription forms, banners with special offers, and aggressively placed social media widgets.

## Contributing

If you want to contribute to the list, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE](LICENSE) file for details.

## Background

During the years I have used a lot of different adblockers and filter lists. But my personal filter list have grown to a point where it is hard to maintain. So I decided to make my own public filter list, so I could share it with others.

The list is mainly aimed at Norwegian users and websites, but I may add other non-Norwegian websites if I use them regularly.

## Acknowledgments

- [uBlock Origin](https://github.com/gorhill/uBlock) - for creating the adblocker of my choice.
- [AdGuard](https://adguard.com/) - for amazing documentation, and tools like aglint.
- [DandelionSprout](https://github.com/DandelionSprout/adfilt) - for being my go-to list for years.
