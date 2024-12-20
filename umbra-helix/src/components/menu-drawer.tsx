// import Logo from "@/common/assets/logo.svg?react";
// import MenuIcon from "@/common/assets/menu.svg?react";
import { ChevronDownIcon, XIcon } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const MenuDrawer = () => {
  const navigate = useNavigate();
  return (
    <div className="drawer drawer-end">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div
          className="tooltip tooltip-secondary tooltip-bottom"
          data-tip="Menu"
        >
          <label
            htmlFor="menu-drawer"
            className="btn btn-circle min-h-10 h-10 w-10"
            data-testid="menu/open"
            data-hotkey="Meta+k"
          >
            MENU ICON
          </label>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="menu-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className="flex flex-col items-start justify-between px-8 py-7 w-full min-h-full bg-secret-sauce text-base-content">
          <div className="w-full flex justify-between items-center">
            <button type="button" onClick={() => navigate("/dashboard")}>
              LOGO
            </button>
            <div className="flex gap-2 items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip="Network management"
              >
                <Link
                  to="/networks"
                  className="btn btn-primary min-h-10 h-10 bg-white hover:bg-white shadow-none border-none gap-2"
                >
                  CURRENT NETWORK NAME
                  <ChevronDownIcon size={24} />
                </Link>
              </div>
              <label
                htmlFor="menu-drawer"
                className="btn btn-circle min-h-10 h-10 w-10 btn-primary bg-white hover:bg-white shadow-none border-none"
              >
                <XIcon />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="text-3xl text-left"
              onClick={() => navigate("/")}
              data-testid="menu/activity"
            >
              Dashboard
            </button>
            <button
              type="button"
              className="text-3xl text-left"
              onClick={() => navigate("/transactions")}
              data-testid="menu/activity"
            >
              Activity
            </button>
            <button
              type="button"
              className="text-3xl text-left"
              onClick={() => navigate("/staking")}
              data-testid="menu/staking"
            >
              Staking
            </button>
            <button
              type="button"
              className="text-3xl text-left"
              onClick={() => navigate("/contacts")}
              data-testid="menu/addressBook"
            >
              Address Book
            </button>
            <button
              type="button"
              className="text-3xl text-left"
              onClick={() => navigate("/settings")}
              data-testid="menu/settings"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
