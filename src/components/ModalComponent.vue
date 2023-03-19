<template>
  <div>
    <button @click="showModal = true">Open Modal</button>

    <div v-if="showModal">
      <div class="modal-overlay"></div>

      <div class="modal">
        <div class="modal-header">
          <h2>{{ title }}</h2>
          <button @click="showModal = false">Close</button>
        </div>

        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
}

.modal-header button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
}

.modal-body p {
  margin: 0;
}
</style>
