import Theme from "../themes/common/theme";
import { backgroundColor, border, borderColor, iconColor, player, popoverShadow, text } from "./components";

export default function contactsPopover(theme: Theme) {
  const nameMargin = 8;
  const sidePadding = 12;

  const projectRow = {
    guestAvatarSpacing: 4,
    height: 24,
    guestAvatar: {
      cornerRadius: 8,
      width: 14,
    },
    name: {
      ...text(theme, "mono", "placeholder", { size: "sm" }),
      margin: {
        left: nameMargin,
        right: 6,
      },
    },
    guests: {
      margin: {
        left: nameMargin,
        right: nameMargin,
      },
    },
    padding: {
      left: sidePadding,
      right: sidePadding,
    },
  };

  const contactButton = {
    background: backgroundColor(theme, 100),
    color: iconColor(theme, "primary"),
    iconWidth: 8,
    buttonWidth: 16,
    cornerRadius: 8,
  };

  return {
    background: backgroundColor(theme, 300, "base"),
    cornerRadius: 6,
    padding: { top: 6 },
    shadow: popoverShadow(theme),
    border: border(theme, "primary"),
    margin: { top: -5 },
    width: 250,
    height: 300,
    userQueryEditor: {
      background: backgroundColor(theme, 500),
      cornerRadius: 6,
      text: text(theme, "mono", "primary"),
      placeholderText: text(theme, "mono", "placeholder", { size: "sm" }),
      selection: player(theme, 1).selection,
      border: border(theme, "secondary"),
      padding: {
        bottom: 4,
        left: 8,
        right: 8,
        top: 4,
      },
      margin: {
        left: sidePadding,
        right: sidePadding,
      },
    },
    userQueryEditorHeight: 32,
    addContactButton: {
      margin: { left: 6, right: 12 },
      color: iconColor(theme, "primary"),
      buttonWidth: 16,
      iconWidth: 16,
    },
    privateButton: {
      iconWidth: 12,
      color: iconColor(theme, "primary"),
      cornerRadius: 5,
      buttonWidth: 12,
    },
    rowHeight: 28,
    sectionIconSize: 8,
    headerRow: {
      ...text(theme, "mono", "secondary", { size: "sm" }),
      margin: { top: 14 },
      padding: {
        left: sidePadding,
        right: sidePadding,
      },
      active: {
        ...text(theme, "mono", "primary", { size: "sm" }),
        background: backgroundColor(theme, 100, "active"),
      },
    },
    contactRow: {
      padding: {
        left: sidePadding,
        right: sidePadding,
      },
      active: {
        background: backgroundColor(theme, 100, "active"),
      },
    },
    treeBranch: {
      color: borderColor(theme, "active"),
      width: 1,
      hover: {
        color: borderColor(theme, "active"),
      },
      active: {
        color: borderColor(theme, "active"),
      },
    },
    contactAvatar: {
      cornerRadius: 10,
      width: 18,
    },
    contactStatusFree: {
      cornerRadius: 4,
      padding: 4,
      margin: { top: 12, left: 12 },
      background: iconColor(theme, "success"),
    },
    contactStatusBusy: {
      cornerRadius: 4,
      padding: 4,
      margin: { top: 12, left: 12 },
      background: iconColor(theme, "warning"),
    },
    contactUsername: {
      ...text(theme, "mono", "primary", { size: "sm" }),
      margin: {
        left: nameMargin,
      },
    },
    contactButtonSpacing: nameMargin,
    contactButton: {
      ...contactButton,
      hover: {
        background: backgroundColor(theme, "on300", "hovered"),
      },
    },
    disabledButton: {
      ...contactButton,
      background: backgroundColor(theme, 100),
      color: iconColor(theme, "muted"),
    },
    projectRow: {
      ...projectRow,
      background: backgroundColor(theme, 300),
      name: {
        ...projectRow.name,
        ...text(theme, "mono", "secondary", { size: "sm" }),
      },
      hover: {
        background: backgroundColor(theme, 300, "hovered"),
      },
      active: {
        background: backgroundColor(theme, 300, "active"),
      },
    },
    inviteRow: {
      padding: {
        left: sidePadding,
        right: sidePadding,
      },
      border: { top: true, width: 1, color: borderColor(theme, "primary") },
      text: text(theme, "sans", "secondary", { size: "sm" }),
      hover: {
        text: text(theme, "sans", "active", { size: "sm" }),
      },
    },
  }
}
