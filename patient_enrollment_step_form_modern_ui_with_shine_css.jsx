<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patient Enrollment Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Shine effect */
        .shine {
          position: relative;
          overflow: hidden;
        }
        .shine::after{
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          transform: rotate(25deg);
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%);
          animation: shineMove 2.2s linear infinite;
          pointer-events: none;
        }
        @keyframes shineMove {
          from { left: -75%; }
          to   { left: 125%; }
        }
    </style>
</head>
<body>
    <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6">
        <div class="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-10 relative">
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h2 class="text-2xl font-semibold">Patient Enrollment</h2>
                    <p class="text-sm text-slate-500">Fast, secure patient intake — modern UI with a friendly shine effect ✨</p>
                </div>
                <div class="text-sm text-slate-600">Step <span class="font-medium" id="current-step">1</span> of <span id="total-steps">5</span></div>
            </div>

            <!-- Progress -->
            <div class="mb-6">
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div id="progress-bar" class="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all" style="width: 0%"></div>
                </div>
                <div class="flex justify-between mt-2 text-xs text-slate-500" id="step-labels">
                    <div class="flex-1 text-center text-indigo-600 font-medium">Personal</div>
                    <div class="flex-1 text-center">Contact</div>
                    <div class="flex-1 text-center">Medical</div>
                    <div class="flex-1 text-center">Insurance</div>
                    <div class="flex-1 text-center">Review</div>
                </div>
            </div>

            <form id="patient-form">
                <div class="space-y-6" id="form-steps">
                    <!-- Step 1: Personal -->
                    <div id="step-1" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">First name</div>
                            <input type="text" id="firstName" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="John">
                        </div>
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Last name</div>
                            <input type="text" id="lastName" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="Doe">
                        </div>
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Date of birth</div>
                            <input type="date" id="dob" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none">
                        </div>
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Gender</div>
                            <select id="gender" class="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <!-- Step 2: Contact -->
                    <div id="step-2" class="hidden grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Phone</div>
                            <input type="text" id="phone" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="+255 7xx xxx xxx">
                        </div>
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Email</div>
                            <input type="email" id="email" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="name@example.com">
                        </div>
                        <div class="md:col-span-2 block">
                            <div class="text-sm text-slate-600 mb-1">Address</div>
                            <textarea id="address" rows="3" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="Street, City, Region"></textarea>
                        </div>
                    </div>

                    <!-- Step 3: Medical -->
                    <div id="step-3" class="hidden grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Blood group</div>
                            <select id="bloodGroup" class="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none">
                                <option value="">Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Allergies</div>
                            <input type="text" id="allergies" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="e.g. Penicillin">
                        </div>
                        <div class="md:col-span-2 block">
                            <div class="text-sm text-slate-600 mb-1">Existing conditions</div>
                            <textarea id="existingConditions" rows="3" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="e.g. Diabetes, Hypertension"></textarea>
                        </div>
                    </div>

                    <!-- Step 4: Insurance -->
                    <div id="step-4" class="hidden grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Insurance provider</div>
                            <input type="text" id="insuranceProvider" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="Provider name">
                        </div>
                        <div class="block">
                            <div class="text-sm text-slate-600 mb-1">Insurance number</div>
                            <input type="text" id="insuranceNumber" class="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:border-transparent outline-none" placeholder="Policy/ID">
                        </div>
                    </div>

                    <!-- Step 5: Review -->
                    <div id="step-5" class="hidden space-y-4">
                        <h3 class="text-lg font-medium">Review details</h3>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Name</div>
                            <div class="text-sm font-medium text-slate-700" id="review-name"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">DOB</div>
                            <div class="text-sm font-medium text-slate-700" id="review-dob"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Gender</div>
                            <div class="text-sm font-medium text-slate-700" id="review-gender"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Phone</div>
                            <div class="text-sm font-medium text-slate-700" id="review-phone"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Email</div>
                            <div class="text-sm font-medium text-slate-700" id="review-email"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Address</div>
                            <div class="text-sm font-medium text-slate-700" id="review-address"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Blood group</div>
                            <div class="text-sm font-medium text-slate-700" id="review-bloodGroup"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Allergies</div>
                            <div class="text-sm font-medium text-slate-700" id="review-allergies"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Conditions</div>
                            <div class="text-sm font-medium text-slate-700" id="review-existingConditions"></div>
                        </div>
                        <div class="flex justify-between items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div class="text-sm text-slate-500">Insurance</div>
                            <div class="text-sm font-medium text-slate-700" id="review-insurance"></div>
                        </div>
                    </div>
                </div>

                <!-- Actions -->
                <div class="mt-6 flex items-center justify-between">
                    <div>
                        <button type="button" id="back-button" class="hidden px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">Back</button>
                    </div>
                    <div class="flex items-center gap-3">
                        <button type="button" id="next-button" class="shine inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 transition">Next</button>
                        <button type="submit" id="submit-button" class="hidden shine inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:opacity-95 transition">Enroll Patient</button>
                    </div>
                </div>
            </form>

            <div class="absolute -top-6 -right-6 hidden md:block">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-200 to-cyan-100 opacity-60 blur-2xl"></div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const totalSteps = 5;
            let currentStep = 1;
            
            // DOM elements
            const currentStepEl = document.getElementById('current-step');
            const progressBar = document.getElementById('progress-bar');
            const stepLabels = document.querySelectorAll('#step-labels div');
            const backButton = document.getElementById('back-button');
            const nextButton = document.getElementById('next-button');
            const submitButton = document.getElementById('submit-button');
            
            // Form fields
            const form = document.getElementById('patient-form');
            const formFields = {
                firstName: document.getElementById('firstName'),
                lastName: document.getElementById('lastName'),
                dob: document.getElementById('dob'),
                gender: document.getElementById('gender'),
                phone: document.getElementById('phone'),
                email: document.getElementById('email'),
                address: document.getElementById('address'),
                bloodGroup: document.getElementById('bloodGroup'),
                allergies: document.getElementById('allergies'),
                existingConditions: document.getElementById('existingConditions'),
                insuranceProvider: document.getElementById('insuranceProvider'),
                insuranceNumber: document.getElementById('insuranceNumber')
            };
            
            // Review fields
            const reviewFields = {
                name: document.getElementById('review-name'),
                dob: document.getElementById('review-dob'),
                gender: document.getElementById('review-gender'),
                phone: document.getElementById('review-phone'),
                email: document.getElementById('review-email'),
                address: document.getElementById('review-address'),
                bloodGroup: document.getElementById('review-bloodGroup'),
                allergies: document.getElementById('review-allergies'),
                existingConditions: document.getElementById('review-existingConditions'),
                insurance: document.getElementById('review-insurance')
            };
            
            // Update UI based on current step
            function updateUI() {
                // Update step display
                currentStepEl.textContent = currentStep;
                
                // Update progress bar
                const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;
                progressBar.style.width = `${progressPercent}%`;
                
                // Update step labels
                stepLabels.forEach((label, index) => {
                    if (index + 1 === currentStep) {
                        label.classList.add('text-indigo-600', 'font-medium');
                        label.classList.remove('text-slate-500');
                    } else {
                        label.classList.remove('text-indigo-600', 'font-medium');
                        label.classList.add('text-slate-500');
                    }
                });
                
                // Show/hide steps
                document.querySelectorAll('#form-steps > div').forEach((step, index) => {
                    if (index + 1 === currentStep) {
                        step.classList.remove('hidden');
                    } else {
                        step.classList.add('hidden');
                    }
                });
                
                // Update buttons
                if (currentStep === 1) {
                    backButton.classList.add('hidden');
                } else {
                    backButton.classList.remove('hidden');
                }
                
                if (currentStep < totalSteps) {
                    nextButton.classList.remove('hidden');
                    submitButton.classList.add('hidden');
                } else {
                    nextButton.classList.add('hidden');
                    submitButton.classList.remove('hidden');
                    updateReview();
                }
            }
            
            // Update review step with form data
            function updateReview() {
                reviewFields.name.textContent = `${formFields.firstName.value} ${formFields.lastName.value}` || '—';
                reviewFields.dob.textContent = formFields.dob.value || '—';
                reviewFields.gender.textContent = formFields.gender.options[formFields.gender.selectedIndex].text || '—';
                reviewFields.phone.textContent = formFields.phone.value || '—';
                reviewFields.email.textContent = formFields.email.value || '—';
                reviewFields.address.textContent = formFields.address.value || '—';
                reviewFields.bloodGroup.textContent = formFields.bloodGroup.options[formFields.bloodGroup.selectedIndex].text || '—';
                reviewFields.allergies.textContent = formFields.allergies.value || '—';
                reviewFields.existingConditions.textContent = formFields.existingConditions.value || '—';
                reviewFields.insurance.textContent = `${formFields.insuranceProvider.value || ''} ${formFields.insuranceProvider.value && formFields.insuranceNumber.value ? '—' : ''} ${formFields.insuranceNumber.value || ''}`.trim() || '—';
            }
            
            // Navigation functions
            function nextStep() {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateUI();
                }
            }
            
            function prevStep() {
                if (currentStep > 1) {
                    currentStep--;
                    updateUI();
                }
            }
            
            // Event listeners
            nextButton.addEventListener('click', nextStep);
            backButton.addEventListener('click', prevStep);
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect form data
                const formData = {
                    firstName: formFields.firstName.value,
                    lastName: formFields.lastName.value,
                    dob: formFields.dob.value,
                    gender: formFields.gender.value,
                    phone: formFields.phone.value,
                    email: formFields.email.value,
                    address: formFields.address.value,
                    bloodGroup: formFields.bloodGroup.value,
                    allergies: formFields.allergies.value,
                    existingConditions: formFields.existingConditions.value,
                    insuranceProvider: formFields.insuranceProvider.value,
                    insuranceNumber: formFields.insuranceNumber.value
                };
                
                // In a real app, you would send this data to a server
                alert('Patient enrolled successfully!\n' + JSON.stringify(formData, null, 2));
            });
            
            // Initialize UI
            updateUI();
        });
    </script>
</body>
</html>