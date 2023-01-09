<el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i className="el-icon-date"></i> {text.Seconds.name}</span>
                <div className="tabBody">
                    <div>
                        <Radio value={second.cronEvery} value={1}>{text.Seconds.every}</Radio>
                    </div>
                    <div>
                        <Radio value={second.cronEvery} value={2}>{text.Seconds.interval[0]}
                            <InputNumber  value={second.incrementIncrement} min={1} max={60}></InputNumber>
                            {text.Seconds.interval[1]||''}
                            <InputNumber  value={second.incrementStart} min={0} max={59}></InputNumber>
                            {text.Seconds.interval[2]||''}
                        </Radio>
                    </div>
                    <div>
                        <Radio className="long" value={second.cronEvery} value={3}>{text.Seconds.specific}
                            <Select  multiple value={second.specificSpecific">
                                <Option v-for="val in 60}  value={val-1}>{val-1}</Option>
                            </Select>
                        </Radio>
                    </div>
                    <div>
                        <Radio value={second.cronEvery} value={4}>{text.Seconds.cycle[0]}
                            <InputNumber  value={second.rangeStart} min={1} max={60}></InputNumber>
                            {text.Seconds.cycle[1]||''}
                            <InputNumber  value={second.rangeEnd} min={0} max={59}></InputNumber>
                            {text.Seconds.cycle[2]||''}
                        </Radio>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i className="el-icon-date"></i> {text.Minutes.name}</span>
                <div className="tabBody">
                    <div>
                        <Radio value={minute.cronEvery} value={1}>{text.Minutes.every}</Radio>
                    </div>
                    <div>
                        <Radio value={minute.cronEvery} value={2}>{text.Minutes.interval[0]}
                            <InputNumber  value={minute.incrementIncrement} min={1} max={60}></InputNumber>
                            {text.Minutes.interval[1]}
                            <InputNumber  value={minute.incrementStart} min={0} max={59}></InputNumber>
                            {text.Minutes.interval[2]||''}
                        </Radio>
                    </div>
                    <div>
                        <Radio className="long" value={minute.cronEvery} value={3}>{text.Minutes.specific}
                            <Select  multiple value={minute.specificSpecific">
                                <Option v-for="val in 60}  value={val-1}>{val-1}</Option>
                            </Select>
                        </Radio>
                    </div>
                    <div>
                        <Radio value={minute.cronEvery} value={4}>{text.Minutes.cycle[0]}
                            <InputNumber  value={minute.rangeStart} min={1} max={60}></InputNumber>
                            {text.Minutes.cycle[1]}
                            <InputNumber  value={minute.rangeEnd} min={0} max={59}></InputNumber>
                            {text.Minutes.cycle[2]}
                        </Radio>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i className="el-icon-date"></i> {text.Hours.name}</span>
                <div className="tabBody">
                    <div>
                        <Radio value={hour.cronEvery} value={1}>{text.Hours.every}</Radio>
                    </div>
                    <div>
                        <Radio value={hour.cronEvery} value={2}>{text.Hours.interval[0]}
                            <InputNumber  value={hour.incrementIncrement} min={0} max={23"></InputNumber>
                            {text.Hours.interval[1]}
                            <InputNumber  value={hour.incrementStart} min={0} max={23"></InputNumber>
                            {text.Hours.interval[2]}
                        </Radio>
                    </div>
                    <div>
                        <Radio className="long" value={hour.cronEvery} value={3}>{text.Hours.specific}
                            <Select  multiple value={hour.specificSpecific">
                                <Option v-for="val in 24}  value={val-1}>{val-1}</Option>
                            </Select>
                        </Radio>
                    </div>
                    <div>
                        <Radio value={hour.cronEvery} value={4}>{text.Hours.cycle[0]}
                            <InputNumber  value={hour.rangeStart} min={0} max={23"></InputNumber>
                            {text.Hours.cycle[1]}
                            <InputNumber  value={hour.rangeEnd} min={0} max={23"></InputNumber>
                            {text.Hours.cycle[2]}
                        </Radio>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i className="el-icon-date"></i> {text.Day.name}</span>
                <div className="tabBody">
                    <div>
                        <Radio value={day.cronEvery} value={1}>{text.Day.every}</Radio>
                    </div>
                    <div>
                        <Radio value={day.cronEvery} value={2}>{text.Day.intervalWeek[0]}
                            <InputNumber  value={week.incrementIncrement} min={1} max={7"></InputNumber>
                            {text.Day.intervalWeek[1]}
                            <Select  value={week.incrementStart">
                                <Option v-for="val in 7}  :value={text.Week[val-1]} value={val"></Option>
                            </Select>
                            {text.Day.intervalWeek[2]}
                        </Radio>
                    </div>
                    <div>
                        <Radio value={day.cronEvery} value={3}>{text.Day.intervalDay[0]}
                            <InputNumber  value={day.incrementIncrement} min={1} max={31"></InputNumber>
                            {text.Day.intervalDay[1]}
                            <InputNumber  value={day.incrementStart} min={1} max={31"></InputNumber>
                            {text.Day.intervalDay[2]}
                        </Radio>
                    </div>
                    <div>
                        <Radio className="long" value={day.cronEvery} value={4}>{text.Day.specificWeek}
                            <Select  multiple value={week.specificSpecific">
                                <Option v-for="val in 7"
                                           :key="val"
                                           :value={text.Week[val-1]"
                                           :value="['SUN','MON','TUE','WED','THU','FRI','SAT'][val-1]"
                                ></Option>
                            </Select>
                        </Radio>
                    </div>
                    <div>
                        <Radio className="long" value={day.cronEvery} value={5}>{text.Day.specificDay}
                            <Select  multiple value={day.specificSpecific">
                                <Option v-for="val in 31}  value={val}>{val}</Option>
                            </Select>
                        </Radio>
                    </div>
                    <div>
                        <Radio value={day.cronEvery} value={6}>{text.Day.lastDay}</Radio>
                    </div>
                    <div>
                        <Radio value={day.cronEvery} value={7}>{text.Day.lastWeekday}</Radio>
                    </div>
                    <div>
                        <Radio value={day.cronEvery} value={8}>{text.Day.lastWeek[0]}
                            <Select  value={day.cronLastSpecificDomDay">
                                <Option v-for="val in 7}  :value={text.Week[val-1]} value={val"></Option>
                            </Select>
                            {text.Day.lastWeek[1]||''}
                        </Radio>
                    </div>
                    <div>
                        <Radio value={day.cronEvery} value={9">
                            <InputNumber  value={day.cronDaysBeforeEomMinus} min={1} max={31"></InputNumber>
                            {text.Day.beforeEndMonth[0]}
                        </Radio>
                    </div>
                    <div>
                        <Radio value={day.cronEvery} value={10}>{text.Day.nearestWeekday[0]}
                            <InputNumber  value={day.cronDaysNearestWeekday} min={1} max={31"></InputNumber>
                            {text.Day.nearestWeekday[1]}
                        </Radio>
                    </div>
                    <div>
                        <Radio value={day.cronEvery} value={11}>{text.Day.someWeekday[0]}
                            <InputNumber  value={week.cronNthDayNth} min={1} max={5"></InputNumber>
                            <Select  value={week.cronNthDayDay">
                                <Option v-for="val in 7}  :value={text.Week[val-1]} value={val"></Option>
                            </Select>
                            {text.Day.someWeekday[1]}
                        </Radio>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i className="el-icon-date"></i> {text.Month.name}</span>
                <div className="tabBody">
                    <div>
                        <Radio value={month.cronEvery} value={1}>{text.Month.every}</Radio>
                    </div>
                    <div>
                        <Radio value={month.cronEvery} value={2}>{text.Month.interval[0]}
                            <InputNumber  value={month.incrementIncrement} min={0} max={12"></InputNumber>
                            {text.Month.interval[1]}
                            <InputNumber  value={month.incrementStart} min={0} max={12"></InputNumber>
                        </Radio>
                    </div>
                    <div>
                        <Radio className="long" value={month.cronEvery} value={3}>{text.Month.specific}
                            <Select  multiple value={month.specificSpecific">
                                <Option v-for="val in 12}  :value={val} value={val"></Option>
                            </Select>
                        </Radio>
                    </div>
                    <div>
                        <Radio value={month.cronEvery} value={4}>{text.Month.cycle[0]}
                            <InputNumber  value={month.rangeStart} min={1} max={12"></InputNumber>
                            {text.Month.cycle[1]}
                            <InputNumber  value={month.rangeEnd} min={1} max={12"></InputNumber>
                        </Radio>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i className="el-icon-date"></i> {text.Year.name}</span>
                <div className="tabBody">
                    <div>
                        <Radio value={year.cronEvery} value={1}>{text.Year.every}</Radio>
                    </div>
                    <div>
                        <Radio value={year.cronEvery} value={2}>{text.Year.interval[0]}
                            <InputNumber  value={year.incrementIncrement} min={1} max={99"></InputNumber>
                            {text.Year.interval[1]}
                            <InputNumber  value={year.incrementStart} min={2018} max={2118"></InputNumber>
                        </Radio>
                    </div>
                    <div>
                        <Radio className="long" value={year.cronEvery} value={3}>{text.Year.specific}
                            <Select  filterable multiple value={year.specificSpecific">
                                <Option v-for="val in 100}  :value={2017+val} :value="2017+val"></Option>
                            </Select>
                        </Radio>
                    </div>
                    <div>
                        <Radio value={year.cronEvery} value={4}>{text.Year.cycle[0]}
                            <InputNumber  value={year.rangeStart}  min={2018} max={2118"></InputNumber>
                            {text.Year.cycle[1]}
                            <InputNumber  value={year.rangeEnd}  min={2018} max={2118"></InputNumber>
                        </Radio>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>