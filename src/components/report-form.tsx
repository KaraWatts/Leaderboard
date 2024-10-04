import { observer } from 'mobx-react-lite';
import formStore from '../stores/FormStore';
import  challengerStore  from '../stores/ChallengerStore';

const ReportForm: React.FC = observer(() => {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const name = formStore.selectedPerson;
        const weight = Number(formStore.weight);

        // Validate form data
        if ( name === '' || weight === 0) {
            alert('Please select a name and enter a weight to submit the form')
            return;
        }


        // trigger secret key popup
        const secretKey = Number(prompt('Enter the secret key to submit the form'));

        // validate challenger key
        const validation = challengerStore.validateChallenger(name, secretKey);

        const successMessages = [
          `Way to go, ${name}! You're crushing it! Keep up the awesome progress! 💪`,
          `Boom! ${name}, you're moving mountains (or at least scales)! 🏆 Keep pushing!`,
          `Woohoo, ${name}! Progress looks good on you! 🎉 Keep rocking it!`
        ]

        const neutralMessages = [
          `Way to weighing in, ${name}! You're steady on the path—let's see what next week brings! 🚀`,
          `Thanks for checking in, ${name}! Keep the momentum—big things are on the horizon! 🌟`,
          `Well, ${name}, not all heroes wear capes—some just weigh in. 😉 On to the next week!`
      ];

        // Randomly select message
        const randomSuccessMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
        const randomNeutralMessage = neutralMessages[Math.floor(Math.random() * neutralMessages.length)];

        // If validation is successful, update the challenger data
        if (validation) {
            // Update the challenger data
            const update = await challengerStore.updateChallengerData(name, weight);

            // Clear the form after submission
            formStore.clearForm();

            // Show update message
            if (update) {
                alert(randomSuccessMessage);
            } else {
                alert(randomNeutralMessage);
            }
            return;
        }
        
        
        alert('Invalid secret key, please try again!');
        return;
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
            }} >
            <label
            htmlFor="weight"
            style={{ fontSize: '1.5em', color: '#5ad77c' }}
          >
            Report Weight Here:
          </label>
          <input
            id="weight"
            type="number"
            placeholder="Enter your weight"
            value={formStore.weight} // Bind to MobX store value
            onChange={(e) => formStore.setWeight(e.target.value)} // Update store on input change
            style={{ padding: '10px', width: '200px' }}
          />
          <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
            }} >
          <label>
        <input
          type="radio"
          id="option1"
          name="option"
          value="Mom"
          style={{ margin: '3px'}}
          checked={formStore.selectedPerson === 'Mom'}
          onChange={(e) => formStore.setSelectedPerson(e.target.value)} // Update store on radio change
        />
        Mom
      </label>
      <label>
        <input
          type="radio"
          id="option2"
          name="option"
          value="Dad"
          style={{ margin: '3px'}}
          checked={formStore.selectedPerson === 'Dad'}
          onChange={(e) => formStore.setSelectedPerson(e.target.value)} // Update store on radio change
        />
        Dad
      </label>
      <label>
        <input
          type="radio"
          id="option3"
          name="option"
          value="John"
          style={{ margin: '3px'}}
          checked={formStore.selectedPerson === 'John'}
          onChange={(e) => formStore.setSelectedPerson(e.target.value)} // Update store on radio change
        />
        John
      </label>
      </div>
      <button
        type="submit"
        style={{
          marginBottom: '10px',
          padding: '10px',
          width: '200px',
          alignSelf: 'center', // Center the button
        }}
      >
        Submit
      </button>
          </form>
    );
});

export default ReportForm;