// Utils

const elemGrab = (model: any, query: string) => model.querySelector(query);
const forEach = (collection: any, cb: any, scope?: any) => {
  try {
    if (typeof collection == "object") {
      for (let i in collection) {
        cb.call(scope, i, collection[i]);
      }
    } else {
      for (let i = 0; i < collection.length; i += 1) {
        cb.call(scope, i, collection[i]);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

// Styles

const styles = {
  flex: "display:flex;",
  col: "flex-direction:column;",
  center: "align-items: center;justify-content: center;",
  justCenter: "justify-content: center;",
  alignCenter: " align-items: center;",
  pSm: "padding: 10px;"
};

// Template

const htmlTemplate = `
<div class="dpickr" style="display:inline-block">
            <div style="${styles.flex}">
                <div class="dpickr-date" style="${styles.flex +
                  styles.col +
                  styles.center +
                  styles.pSm}">
                    <div class="up p-sm" style="${styles.pSm}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z"/></svg>
                    </div>
                    <div class="date">

                    </div>
                    <div class="down" style="transform:rotate(180deg);${
                      styles.pSm
                    }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z"/></svg>
                    </div>
                </div>
                <div class="dpickr-month" style="${styles.flex +
                  styles.col +
                  styles.center +
                  styles.pSm}">
                    <div class="up p-sm" style="${styles.pSm}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z"/></svg>
                    </div>
                    <div class="date">

                    </div>
                    <div class="down" style="transform:rotate(180deg);${
                      styles.pSm
                    }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z"/></svg>
                    </div>
                </div>
                <div class="dpickr-year" style="${styles.flex +
                  styles.col +
                  styles.center +
                  styles.pSm}">
                    <div class="up p-sm" style="${styles.pSm}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z"/></svg>
                    </div>
                    <div class="date">

                    </div>
                    <div class="down" style="transform:rotate(180deg);${
                      styles.pSm
                    }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z"/></svg>
                    </div>
                </div>
            </div>
        </div>
`;

// Interfaces

interface Options {
  onChange: Function;
  el: Element;
}

interface Selectors {
  date: Element;
  month: Element;
  year: Element;
  [key: string]: Element;
}

// Class

class dPick {
  options: Options;
  today: Date = new Date();
  selectors: Selectors = {
    date: document.body,
    month: document.body,
    year: document.body
  };

  constructor(options: Options) {
    this.options = options;
    this.options.el.innerHTML = htmlTemplate;
    this.options.onChange(this.today);
    this.addSelectors();
    this.redrawValues();
  }

  private addSelectors() {
    forEach(this.selectors, (key: string, value: any) => {
      const el = elemGrab(this.options.el, ".dpickr-" + key);
      const upButton = elemGrab(el, ".up");
      const downButton = elemGrab(el, ".down");
      this.selectors[key] = elemGrab(el, ".date");

      upButton.addEventListener("click", (e: any) => {
        this.setTime(key, 1);
      });

      downButton.addEventListener("click", (e: any) => {
        this.setTime(key, -1);
      });
    });
  }

  private setTime(key: string, direction: number) {
    let date = new Date(this.today);
    if (key == "date") {
      date.setDate(date.getDate() + direction);
    } else if (key == "month") {
      date.setMonth(date.getMonth() + direction);
    } else if (key == "year") {
      date.setFullYear(date.getFullYear() + direction);
    }
    this.today = date;
    this.options.onChange(this.today);
    this.redrawValues();
  }

  private redrawValues() {
    forEach(this.selectors, (key: string, value: any) => {
      if (!value) {
        return;
      }

      switch (key) {
        case "date":
          value.innerHTML = this.today.getDate();
          break;
        case "month":
          value.innerHTML = this.today.getMonth() + 1;
          break;
        case "year":
          value.innerHTML = this.today.getFullYear();
          break;
      }
    });
  }
}
