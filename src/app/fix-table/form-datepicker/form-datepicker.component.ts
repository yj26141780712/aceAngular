import { Component, OnInit, ViewChild, ElementRef, HostListener, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export const EXE_COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormDatepickerComponent),
  multi: true
};

@Component({
  selector: 'app-form-datepicker',
  templateUrl: './form-datepicker.component.html',
  styleUrls: ['./form-datepicker.component.scss'],
  providers: [EXE_COUNTER_VALUE_ACCESSOR]
})
export class FormDatepickerComponent implements OnInit, ControlValueAccessor {


  @ViewChild('dateInput') dateInput: ElementRef;
  style: any = {};
  year: number;
  month: number;
  activeYear: number;
  activeMonth: number;
  activeday: number;
  weeks: any[] = [];
  months: any[] = [];
  pickerShow: boolean = false;
  typeShow: string = 'days';
  target: any;

  @Input() _datepickerValue: string = '';
  get datepickerValue() {
    return this._datepickerValue;
  }

  set datepickerValue(value: string) {
    this._datepickerValue = value;
    this.propagateChange(this._datepickerValue);
  }

  writeValue(value: any) {
    if (value) {
      this.datepickerValue = value;
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: (_: any) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {

  }

  ngOnInit() {
    //初始化显示时间
    this.timeInit();
    //初始化时间控件样式
    let left = this.dateInput && this.dateInput.nativeElement.offsetLeft;
    let top = this.dateInput && this.dateInput.nativeElement.offsetTop;
    this.style = { left: `${left}px`, top: `${top + 28}px` };
  }

  timeInit() {
    let time = new Date();
    this.year = this.activeYear = time.getUTCFullYear();
    this.month = this.activeMonth = time.getMonth();
    this.activeday = time.getDay() + 1;
    this.weeks = this.getTimeArr();
  }

  /**
   * 选择日期
   * @param e 日期选择事件
   */
  dateSelect(e) {
    this.pickerShow = !this.pickerShow;
    this.typeShow = 'days';
    this.target = e.target;
    //e.stopPropagation();
  }

  /**
   * 向前翻页
   * @param e 
   * @param type 类型
   */
  prev(e: Event, type) {
    if (type == 'month') {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
      this.weeks = this.getTimeArr();
    } else if (type == 'year') {
      this.year--;
      this.months = this.getMonthArr();
    }
    e.stopPropagation();
  }

  /**
   * 向后翻页
   * @param e 
   * @param type 类型
   */
  next(e, type) {
    if (type == 'month') {
      this.month++;
      if (this.month >= 12) {
        this.month = 0;
        this.year++;
      } else if (type == "year") {
        this.year++;
      }
      this.weeks = this.getTimeArr();
    } else if (type == 'year') {
      this.year++;
      this.months = this.getMonthArr();
    }
    e.stopPropagation();
  }

  /**
   * 切换时间选择
   * @param e 
   * @param type 类型 
   */
  swith(e, type) {
    if (type == 'month') {
      this.typeShow = 'months';
      this.months = this.getMonthArr();
    }
    e.stopPropagation();
  }

  /**
   * 时间控件点击事件
   * @param e 
   */
  pickerClick(e) {
    e.stopPropagation();
  }

  /**
   * 日期选择事件
   * @param e 
   * @param time时间 
   */
  dayClick(e, time) {
    this.activeYear = this.year = time.year;
    this.activeMonth = this.month = time.month;
    this.activeday = time.day;
    this.pickerShow = false;
    this.datepickerValue = this.getTime();;
    this.weeks = this.getTimeArr();
    e.stopPropagation();
  }

  /**
   * 月份选择事件
   * @param e 
   * @param time 时间 
   */
  monthClick(e, time) {
    this.year = time.year;
    this.month = time.month;
    this.typeShow = 'days';
    this.weeks = this.getTimeArr();
    e.stopPropagation();
  }

  todayClick(e) {
    this.timeInit();
    this.pickerShow = false;
    this.datepickerValue = this.getTime();
    e.stopPropagation();
  }

  /**
   * 获取显示日期数组
   */
  getTimeArr() {
    let monthLast = this.month - 1;
    let yearLast = this.year;
    if (monthLast < 0) {
      monthLast = 11;
      yearLast--;
    }
    let monthNext = this.month + 1;
    let yearNext = this.year;
    if (monthNext > 11) {
      monthNext = 1;
      yearNext++;
    }
    let daysMonthLastAll = this.getDaysInMonth(yearLast, monthLast); //上个月天数
    let daysMonthAll = this.getDaysInMonth(this.year, this.month); //当前月天数
    //let daysMonthNextAll = this.getDaysInMonth(yearNext, monthNext); //下个月天数

    let timeMonthfirstDay = new Date(`${this.year}-${this.month + 1}-1`); //当前月第一天时间
    let dayOfWeek = timeMonthfirstDay.getDay(); //当前月第一天星期几

    let daysMonthLast = this.getDaysLastMonth(dayOfWeek); //上个月显示天数
    let daysMonthNext = 42 - daysMonthAll - daysMonthLast; //下个月显示天数

    let arr = [];
    for (let i = 0; i < daysMonthLast; i++) {
      arr.push({ year: yearLast, month: monthLast, day: daysMonthLastAll-- });
    }
    arr.reverse() //反转数组数据
    for (let i = 0; i < daysMonthAll; i++) {
      arr.push({ year: this.year, month: this.month, day: i + 1 });
    }
    for (let i = 0; i < daysMonthNext; i++) {
      arr.push({ year: yearNext, month: monthNext, day: i + 1 })
    }
    let timeArr = [];
    let weekArr = [];
    arr.forEach((obj, i) => {
      weekArr.push(obj);
      if ((i + 1) % 7 == 0) {
        timeArr.push(weekArr);
        weekArr = [];
      }
    })
    return timeArr;
  }

  getMonthArr() {
    let arr = [];
    for (let i = 0; i < 12; i++) {
      arr.push({ year: this.year, month: i });
    }
    return arr
  }

  /**
   * 获取上月显示天数
   * @param dayOfWeek 星期几
   */
  getDaysLastMonth(dayOfWeek) {
    if (dayOfWeek == 0) {
      return 6;
    } else if (dayOfWeek == 1) {
      return 7;
    } else {
      return dayOfWeek - 1
    }
  }

  /**
   * 判断当前时间是否选择时间
   * @param time 时间
   */
  isActive(time, type) {
    if (type == 'day') {
      return time.year == this.activeYear && time.month == this.activeMonth && time.day == this.activeday;
    }
    if (type == 'month') {
      return time.year == this.activeYear && time.month == this.activeMonth
    }
    return false;
  }


  /**
   * 判断是否过去时间
   * @param time 时间
   */
  isOld(time) {
    if (time.year < this.year) {
      return true;
    }
    if (time.month < this.month) {
      return true;
    }
    return false;
  }

  /**
   * 判断是否未来时间
   * @param time 时间
   */
  isNew(time) {
    if (time.year > this.year) {
      return true;
    }
    if (time.month > this.month) {
      return true;
    }
    return false;
  }

  /**
   * 判断是否闰年
   * @param year 年
   */
  isLeapYear(year) {
    //被4整除且不能被100整除 或 被400整除
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
  }

  /**
   * 获取天数
   * @param year 年
   * @param month 月
   */
  getDaysInMonth(year, month) {
    return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
  }

  /**
   * 
   * @param format 
   */
  getTime(format?) {
    let value = '';
    let year = this.activeYear;
    let month = this.activeMonth + 1;
    let day = this.activeday;
    switch (format) {
      case "yyyy-MM-dd":
        break;
      default:
        let monthStr = month > 9 ? month + '' : '0' + month;
        let dayStr = day > 9 ? day + '' : '0' + day;
        value = `${this.activeYear}-${monthStr}-${dayStr}`;
        break;
    }
    return value;
  }

  @HostListener('document:click', ['$event'])
  onclick(e) {
    if (e.target != this.target) {
      this.pickerShow = false;
    }
  }
}
