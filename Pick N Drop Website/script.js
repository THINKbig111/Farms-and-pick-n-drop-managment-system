let schedules = [];
let attendances = [];
let payments = [];
let editingScheduleIndex = null;
let editingAttendanceIndex = null;

// Schedule Management
document.getElementById('busForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    const busNumber = document.getElementById('busNumber').value;
    const pickTime = document.getElementById('pickTime').value;
    const dropTime = document.getElementById('dropTime').value;
    const paymentAmount = document.getElementById('paymentAmount').value;
    const balance = document.getElementById('balance').value;

    const schedule = {
        studentName,
        studentClass,
        busNumber,
        pickTime,
        dropTime,
        paymentAmount,
        balance
    };

    if (editingScheduleIndex === null) {
        schedules.push(schedule);
        payments.push({ studentName, paymentAmount, balance });
    } else {
        schedules[editingScheduleIndex] = schedule;
        payments[editingScheduleIndex] = { studentName, paymentAmount, balance };
        editingScheduleIndex = null;
    }

    renderSchedules();
    renderPayments();
    this.reset();
});

function renderSchedules() {
    const scheduleItems = document.getElementById('scheduleItems');
    scheduleItems.innerHTML = '';

    schedules.forEach((schedule, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${schedule.studentName}</td>
            <td>${schedule.studentClass}</td>
            <td>${schedule.busNumber}</td>
            <td>${schedule.pickTime}</td>
            <td>${schedule.dropTime}</td>
            <td>${schedule.paymentAmount}</td>
            <td>${schedule.balance}</td>
            <td>
                <button class="edit-btn" onclick="editSchedule(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteSchedule(${index})">Delete</button>
            </td>
        `;

        scheduleItems.appendChild(row);
    });
}

function editSchedule(index) {
    const schedule = schedules[index];

    document.getElementById('studentName').value = schedule.studentName;
    document.getElementById('studentClass').value = schedule.studentClass;
    document.getElementById('busNumber').value = schedule.busNumber;
    document.getElementById('pickTime').value = schedule.pickTime;
    document.getElementById('dropTime').value = schedule.dropTime;
    document.getElementById('paymentAmount').value = schedule.paymentAmount;
    document.getElementById('balance').value = schedule.balance;

    editingScheduleIndex = index;
}

function deleteSchedule(index) {
    schedules.splice(index, 1);
    payments.splice(index, 1);
    renderSchedules();
    renderPayments();
}

// Attendance Management
document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const attendanceDate = document.getElementById('attendanceDate').value;
    const studentNameAttendance = document.getElementById('studentNameAttendance').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;

    const attendance = {
        attendanceDate,
        studentNameAttendance,
        attendanceStatus
    };

    if (editingAttendanceIndex === null) {
        attendances.push(attendance);
    } else {
        attendances[editingAttendanceIndex] = attendance;
        editingAttendanceIndex = null;
    }

    renderAttendances();
    this.reset();
});

function renderAttendances() {
    const attendanceItems = document.getElementById('attendanceItems');
    attendanceItems.innerHTML = '';

    attendances.forEach((attendance, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${attendance.attendanceDate}</td>
            <td>${attendance.studentNameAttendance}</td>
            <td>${attendance.attendanceStatus}</td>
            <td>
                <button class="edit-btn" onclick="editAttendance(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteAttendance(${index})">Delete</button>
            </td>
        `;

        attendanceItems.appendChild(row);
    });
}

function editAttendance(index) {
    const attendance = attendances[index];

    document.getElementById('attendanceDate').value = attendance.attendanceDate;
    document.getElementById('studentNameAttendance').value = attendance.studentNameAttendance;
    document.getElementById('attendanceStatus').value = attendance.attendanceStatus;

    editingAttendanceIndex = index;
}

function deleteAttendance(index) {
    attendances.splice(index, 1);
    renderAttendances();
}

// Payment Summary Management
function renderPayments() {
    const paymentItems = document.getElementById('paymentItems');
    paymentItems.innerHTML = '';

    payments.forEach(payment => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${payment.studentName}</td>
            <td>${payment.paymentAmount}</td>
            <td>${payment.balance}</td>
        `;

        paymentItems.appendChild(row);
    });
}
