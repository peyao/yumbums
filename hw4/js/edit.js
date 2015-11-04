<form id="formADD" onsubmit="return validateForm()" action="testList.html" method="post">
<p><label for="title"><span id="title_text">Habit Title</span></label></p>
<p><input id="title" type="text" name="fullname" placeholder="Enter habit here" required></p>
<p><label>Habit Icon</label></p>
<div id="image-button">
<label>
<input id="imgRadio1" type="radio" name="imgRadio">
<img id="icon1" class="icon" onclick="selectImage('icon1');" src="../img/virtue.png" alt="sleep image"/>
</label>
<label>
<input id="imgRadio2" type="radio" name="imgRadio">
<img id="icon2" class="icon" onclick="selectImage('icon2');" src="../img/greyvice.png" alt="eat image"/>
</label>
<label>
<input id="imgRadio3" type="radio" name="imgRadio">
<img id="icon3" class="icon" onclick="selectImage('icon3');" src="../img/hollow.png" alt="run image"/>
</label>
<label>
<input id="iconFile" type="file" accept=".png, .gif, .jpg" onclick="setIcon()">
<img id="icon4" class="icon" src="../img/add.png" alt="find an image"/>
</label>
</div>
<p><label>Weekly Frequency</label></p>
<div id="ck-button">
<label> <input type="checkbox" name="date" value="sunday"><span>Sun</span></label>
<label> <input type="checkbox" name="date" value="monday"><span>Mon</span></label>
<label> <input type="checkbox" name="date" value="tuesday"><span>Tues</span></label>
<label> <input type="checkbox" name="date" value="wednesday"><span>Wed</span></label>
<label> <input type="checkbox" name="date" value="thursday"><span>Thur</span></label>
<label> <input type="checkbox" name="date" value="friday"><span>Fri</span></label>
<label> <input type="checkbox" name="date" value="saturday"><span>Sat</span></label>
</div>
<p><label>Daily Frequency</label></p>
<div id="daily-button" >
<label> <input type="radio" name="day" value="1" onclick="clearOther()"><span>1</span></label>
<label> <input type="radio" name="day" value="2" onclick="clearOther()"><span>2</span></label>
<label> <input type="radio" name="day" value="3" onclick="clearOther()"><span>3</span></label>
<span id="times">Times</span>
</div>
<p><label for="others"><span id="others_text">Others: </span>
<input id="others" type="number" step="1" min="1" max="100" name="day"
placeholder="Enter custom frequency" onclick="uncheckradio()"></label></p>
<p id="save_p"><input id="save" type="submit" value="Save It"></p>
</form>